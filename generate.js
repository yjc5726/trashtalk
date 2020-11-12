function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashtalk(option) {
  //定義變數
  const task = {
  engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
  teacher: ['當小孩褓母', '顧小孩','改考卷','發想教材']
  }

  const phrase = ['很簡單','很容易','很快','很正常']

 
  //裝進使用者勾選的選項
  //開始產生幹話
  let collection = ''
  if (option.job === 'engineer') {
    collection= '工程師'+ sample(task.engineer)+sample(phrase)
  }
  if (option.job === 'designer') {
    collection= '設計師'+ sample(task.designer)+sample(phrase)
  }
  if (option.job === 'teacher') {
    collection= '老師'+ sample(task.teacher)+sample(phrase)
  }
  if (collection.length === 0) {
    return '請選擇一個職業'
  }

  
  

  //回傳幹話
  return collection

}

module.exports = generateTrashtalk