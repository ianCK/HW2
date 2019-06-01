# 作業二--電商前端應用
參考了 https://www.anisong-taisho.jp/ 這個網站，但所有的東西都是我自己寫的，動畫、選單等等的實現方式都是自己上網查各種教學網站學會的  
## 簡介
> 一打開首頁會先有進場動畫，接著會直接顯示商品  
> 為了方便使用者使用，設有新增商品、查詢商品等功能
## 功能介紹
### 主頁
> #### 開始時
>> * 使用了 jquery 的 ready 讓網頁在還沒加載完成之前什麼都不會顯示。
>> * 當網頁加載完成之後會先跑動畫，黃色方框會射入畫面，右上角的選單按鈕會淡入
>> * 當邊框及選單按鈕的動畫都完成之後，標題的"作業二--電商前端應用"會下滑進入頁面
>> * 接著會一口氣展示所有商品，同時，右上角的按鈕也開始可以使用
>> * 動畫的部分都使用css的keyframes實作，這是我自己上網查到的技巧
> #### 右上角的按鈕
>> * 按下後按鈕會旋轉並秀出選單，同時商品展示區會跟著左移
>> * 選單中有 主頁、新增商品、查詢商品 三個連結  
> #### 左右換頁鈕  
>> * 因為覺得一般的換頁按鈕換頁速度太慢且不方便使用，故使用動畫的方式呈現換頁的效果
>> * 當在第一頁的時候不會顯示上一頁的按鈕，在最後一頁的時候也不會顯示下一頁的按鈕  
### 新增商品
>  #### 開始時  
>> * 同首頁，一樣會有動畫  
>  #### 右上方的選單鈕
>> * 功能同首頁，當使用者按下時會旋轉並秀出選單，同時輸入區會跟著左移
>  #### 輸入資料
>> * 需要輸入商品名稱、售價、剩餘數量以新增新商品 
>> * 系統會偵測使用者輸入的資料是否符合格式 ex. 會請使用者輸入所有資料、價格和數量需為正整數
>> * 若輸入正確的資料之後下方會出現確認欄
>> * 確認後確認欄會下移並消失，同時會出現 商品新增成功 的提示  
### 查詢商品
>  #### 開始時  
>> * 同首頁，一樣會有動畫  
>  #### 查詢資料
>> * 輸入商品名稱及價格範圍以查詢  
>> * 若留空就會只查詢有輸入的  
>> * 商品價格的部分，若輸入的值不為數字會請使用者重新輸入
>> * 若查無資料會在警告欄顯示無資料
>> * 查到資料後會有動畫，讓下方藍色框框成為資料顯示區  
>> * 查到的商品一樣會分頁
>> * 會根據頁數來調整左右按鈕的顯示與否
## 再次強調 所有的東西都是我自己寫的，連bootstrap都沒有引入，唯一使用到別人寫的東西是jquery