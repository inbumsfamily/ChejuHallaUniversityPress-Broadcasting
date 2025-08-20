import bcrypt from 'bcryptjs';

const password = 'password123';
const hash = bcrypt.hashSync(password, 10);
console.log('Password:', password);
console.log('Hash:', hash);

// Verify the hash works
console.log('Verification:', bcrypt.compareSync(password, hash));