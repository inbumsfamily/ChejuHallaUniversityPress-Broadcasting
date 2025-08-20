const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('메뉴 클릭 테스트 시작...\n');
    
    // 1. 메인 페이지 접속
    console.log('1. 메인 페이지 접속...');
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(2000);
    
    // 2. 방송국 메뉴 클릭
    console.log('2. 방송국 메뉴 클릭...');
    await page.click('a[href="/broadcast"]');
    await page.waitForTimeout(2000);
    
    const broadcastUrl = page.url();
    console.log(`   - 현재 URL: ${broadcastUrl}`);
    
    if (broadcastUrl.includes('/broadcast')) {
      console.log('   ✅ 성공! 방송국 카테고리 페이지로 이동했습니다.');
      
      // 서브메뉴 확인
      const subMenus = await page.$$('a[href^="/"]');
      const subMenuCount = await page.$$eval('a[href*="broadcast-"]', els => els.length);
      console.log(`   - 방송국 서브메뉴 개수: ${subMenuCount}개`);
      
      // 서브메뉴 하나 클릭 테스트
      const hasHallaNews = await page.$('a[href="/halla-news"]');
      if (hasHallaNews) {
        console.log('   - 한라뉴스 서브메뉴 발견');
        await hasHallaNews.click();
        await page.waitForTimeout(2000);
        const hallaNewsUrl = page.url();
        console.log(`   - 한라뉴스 페이지 URL: ${hallaNewsUrl}`);
      }
    } else {
      console.log('   ❌ 실패! 방송국 페이지로 이동하지 못했습니다.');
    }
    
    // 3. 신문사 메뉴 테스트
    console.log('\n3. 신문사 메뉴 테스트...');
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(1000);
    
    await page.click('a[href="/newspaper"]');
    await page.waitForTimeout(2000);
    
    const newspaperUrl = page.url();
    console.log(`   - 현재 URL: ${newspaperUrl}`);
    
    if (newspaperUrl.includes('/newspaper')) {
      console.log('   ✅ 성공! 신문사 카테고리 페이지로 이동했습니다.');
      
      const newspaperSubMenuCount = await page.$$eval('a[href*="newspaper-"]', els => els.length);
      console.log(`   - 신문사 서브메뉴 개수: ${newspaperSubMenuCount}개`);
    }
    
    // 4. 페이지 타이틀 확인
    console.log('\n4. 페이지 정보 확인...');
    const pageTitle = await page.title();
    console.log(`   - 페이지 타이틀: ${pageTitle}`);
    
    // 5. 헤더 메뉴 확인
    const headerMenus = await page.$$eval('nav a', els => els.map(el => el.textContent));
    console.log(`   - 헤더 메뉴들: ${headerMenus.join(', ')}`);
    
  } catch (error) {
    console.error('테스트 중 오류 발생:', error);
  } finally {
    await browser.close();
    console.log('\n테스트 완료!');
  }
})();