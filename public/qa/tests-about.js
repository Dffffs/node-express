suite('"About" Page Tests', ()=>{
   test('page should contain link to contact page',()=>{
       console.log(document.querySelectorAll('a[herf="/contact"]').length);
      assert(document.querySelectorAll('a[herf="/contact"]').length);
   });
});