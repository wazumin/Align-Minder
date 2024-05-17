
const calculateDates = () => {
  const startDate = new Date(document.getElementById('startDate').value);
  const interval = parseInt(document.getElementById('interval').value, 10);
  const nextAppointmentDate = new Date(document.getElementById('nextAppointmentDate').value);
  
  const dates = [];
  let currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + interval);
  while (currentDate <= nextAppointmentDate) {
    //2023/6/14的な表示で追加
    dates.push(currentDate.toLocaleDateString());
    // 日付を変更
    currentDate.setDate(currentDate.getDate() + interval);
  }

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = '';

  for (const date of dates) {
    // li要素を作り出す
    const li = document.createElement('li');
    li.textContent = date;
    outputElement.appendChild(li);
  }
}

/*
ロジック
まず開始日時と終了日時が必要
そこの日付データを取得
そこで付け替えの感覚も最初に取得する必要がある
開始時点の日付を数値化して、それに感覚の日付を追加し、
その日付が病院の予約日時より前の場合であればリストに追加
数値を越えるまで基本的にはループ
最終の日時がない場合、リストのサイズが20位あればいい

やりたいこと
日付取得
それに１週間追加
そこから次の来院日までの範囲
*/