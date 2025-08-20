import type { JWTPayload } from '../types';

export type Permission = 'create' | 'read' | 'update' | 'delete';
export type Section = 'broadcasting' | 'newspaper' | 'special-report' | 'users' | 'settings' | 'all';

interface RolePermissions {
  [section: string]: Permission[];
}

const rolePermissionsMatrix: { [roleId: number]: RolePermissions } = {
  1: { // 관리자
    'all': ['create', 'read', 'update', 'delete']
  },
  2: { // 편집기자
    'newspaper': ['create', 'read', 'update'],
    'special-report': ['create', 'read', 'update'],
    'broadcasting': ['read'],
    'all': ['read']
  },
  3: { // 방송PD
    'broadcasting': ['create', 'read', 'update'],
    'newspaper': ['create', 'read', 'update'],
    'special-report': ['read'],
    'all': ['read']
  },
  4: { // 프리미엄회원
    'all': ['read'],
    'comments': ['create', 'read', 'update'] // Can create comments
  },
  5: { // 일반회원
    'all': ['read']
  }
};

export function hasPermission(
  user: JWTPayload | null,
  section: Section,
  permission: Permission
): boolean {
  if (!user) return permission === 'read'; // Non-authenticated users can only read
  
  const rolePermissions = rolePermissionsMatrix[user.role_id];
  if (!rolePermissions) return false;
  
  // Check if user has permission for 'all' sections
  if (rolePermissions['all']?.includes(permission)) {
    return true;
  }
  
  // Check specific section permission
  if (rolePermissions[section]?.includes(permission)) {
    return true;
  }
  
  return false;
}

export function canManageArticle(
  user: JWTPayload | null,
  articleCategorySlug: string,
  permission: Permission
): boolean {
  if (!user) return permission === 'read';
  
  // Admin can do everything
  if (user.role_id === 1) return true;
  
  // Map category slugs to sections
  const categoryToSection: { [key: string]: Section } = {
    'broadcasting': 'broadcasting',
    'halla-news': 'broadcasting',
    'field-coverage': 'broadcasting',
    'studio-program': 'broadcasting',
    'newspaper': 'newspaper',
    'news': 'newspaper',
    'column': 'newspaper',
    'culture': 'newspaper',
    'interview': 'newspaper',
    'special-report': 'special-report',
    'investigation': 'special-report',
    'series': 'special-report',
  };
  
  const section = categoryToSection[articleCategorySlug] || 'all';
  return hasPermission(user, section, permission);
}

export function isAdmin(user: JWTPayload | null): boolean {
  return user?.role_id === 1;
}

export function canCreateContent(user: JWTPayload | null): boolean {
  return user ? [1, 2, 3].includes(user.role_id) : false;
}

export function canComment(user: JWTPayload | null): boolean {
  return user ? [1, 2, 3, 4].includes(user.role_id) : false;
}