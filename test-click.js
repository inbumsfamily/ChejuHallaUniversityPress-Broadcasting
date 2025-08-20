const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('1. 메인 페이지 접속...');
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(3000); // Wait for articles to load
    
    // Check if articles are loaded
    const articles = await page.$$('article');
    console.log(`   - 발견된 기사 카드: ${articles.length}개`);
    
    if (articles.length > 0) {
      // Get first article info
      const firstArticle = articles[0];
      const titleText = await firstArticle.$eval('h3', el => el.textContent.trim());
      console.log(`   - 첫 번째 기사 제목: ${titleText}`);
      
      // Try to click the article
      console.log('2. 기사 클릭 시도...');
      await firstArticle.click();
      await page.waitForTimeout(2000);
      
      // Check if we navigated to article page
      const currentUrl = page.url();
      console.log(`   - 현재 URL: ${currentUrl}`);
      
      if (currentUrl.includes('/article/')) {
        console.log('   ✅ 성공! 기사 상세 페이지로 이동했습니다.');
        
        // Check page title
        const pageTitle = await page.title();
        console.log(`   - 페이지 제목: ${pageTitle}`);
      } else {
        console.log('   ❌ 실패! 기사 페이지로 이동하지 못했습니다.');
      }
    } else {
      console.log('   ⚠️ 기사가 로드되지 않았습니다.');
    }
    
    // Test category page
    console.log('\n3. 카테고리 페이지 테스트...');
    await page.goto('http://localhost:3000/newspaper-intro');
    await page.waitForTimeout(2000);
    
    const categoryArticles = await page.$$('#articlesList article');
    console.log(`   - 카테고리 페이지 기사: ${categoryArticles.length}개`);
    
    if (categoryArticles.length > 0) {
      const firstCatArticle = categoryArticles[0];
      const catTitleText = await firstCatArticle.$eval('h3', el => el.textContent.trim());
      console.log(`   - 첫 번째 기사 제목: ${catTitleText}`);
      
      await firstCatArticle.click();
      await page.waitForTimeout(2000);
      
      const catUrl = page.url();
      console.log(`   - 현재 URL: ${catUrl}`);
      
      if (catUrl.includes('/article/')) {
        console.log('   ✅ 성공! 카테고리 페이지에서도 기사 클릭이 작동합니다.');
      } else {
        console.log('   ❌ 실패! 카테고리 페이지에서 기사 클릭이 작동하지 않습니다.');
      }
    }
    
  } catch (error) {
    console.error('테스트 중 오류 발생:', error);
  } finally {
    await browser.close();
  }
})();