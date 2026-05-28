// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let t = false;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
let spankaisu = document.querySelector('span#kaisu');
let spananswer = document.querySelector('span#answer');
spankaisu.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let kazu = document.querySelector('input#kazu');
  let yoso = Number(kazu.value);
  spananswer.textContent = yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  let spanAnswer = document.querySelector('span#answer');
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
 let presult = document.querySelector('p#result');
  if(t || kaisu >= 4){
    presult.textContent ='答えは' + kotae + 'でした。すでにゲームは終わっています。';
  } else if(yoso === kotae) {
    presult.textContent ='正解です。おめでとう！';
    t = true;
  } else {
    if(kaisu === 3){
      presult.textContent ='まちがいです、残念でした答えは'+ kotae + 'です。';
    } else if(yoso < kotae) {
      presult.textContent ='まちがいです、答えはもっと大きいですよ。';
    } else if(yoso > kotae){
      presult.textContent ='まちがいです、答えはもっと小さいですよ。';
    }
  }
  // ここまで: 正解判定する


// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
  }let bottan = document.querySelector('#print');
  bottan.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
