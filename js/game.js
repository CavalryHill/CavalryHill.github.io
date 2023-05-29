/*function GetInput(num_001, num_002, num_003)
{
    num_001=document.getElementById('num_001').value; 
    num_002=document.getElementById('num_002').value; 
    num_003=document.getElementById('num_003').value; 
}

function CheckInput(num_001, num_002, num_003)
{
    if (num_001==num_003||num_001==num_002||num_002==num_003){input_check=false; } else {input_check=true; }
}

// 上面在 function 內都沒法改值，大概是太久沒打，怪怪的*/

function GameRst() // <Q4>
{
    document.getElementById('num_001').value=''; 
    document.getElementById('num_002').value=''; 
    document.getElementById('num_003').value=''; 

    const prize_list=document.getElementById('prize_list'); prize_list.innerHTML=''; 
}

function GameRun()
{
    // > 獲取輸入
    var num_001=document.getElementById('num_001').value; 
    var num_002=document.getElementById('num_002').value; 
    var num_003=document.getElementById('num_003').value; 

    var input_check=false; 

    // > 防止缺值 <Q5>
    if (num_001==''||num_002==''||num_003=='')
    {
        alert('請記得輸入數字'); 
    }
    else if (num_001>10||num_002>10||num_003>10)
    {
        alert('請輸入有效數字'); 
    }
    else if (num_001<1||num_002<1||num_003<1)
    {
        alert('請輸入有效數字'); 
    }
    else
    {
        // > 防止輸入有重複
        if (num_001==num_002||num_001==num_003||num_002==num_003){input_check=false; } else {input_check=true; }

        if (input_check==false)
        {
            alert('請不要重複任何數字，你這樣中獎機率低很多喔'); 
        } 
        else
        {
            var num_arr=[num_001, num_002, num_003]; 

            // > 產生球號
            var ball_001=Math.floor(Math.random()*10)+1; // https://www.w3schools.com/jsref/jsref_random.asp
            var ball_002=Math.floor(Math.random()*10)+1; 
            var ball_003=Math.floor(Math.random()*10)+1; 

            // > 防止球重複
            while (ball_002==ball_001){ball_002=(Math.random()*10)+1; } 
            while (ball_003==ball_001||ball_003==ball_002){ball_003=(Math.random()*10)+1; } 

            var ball_arr=[ball_001, ball_002, ball_003]; 
            
            // > 資料比對 <Q1>
            var plot_cnt=0; 

            for (num=0; num<num_arr.length; num++)
            {
                for (ball=0; ball<ball_arr.length; ball++)
                {
                    if (num_arr[num]==ball_arr[ball]){plot_cnt+=1; break; }
                }
            }

            // > 公告結果 <Q2>
            const prize_arr=[10, 50, 100]; var prize_msg; 
            const prize_list=document.getElementById('prize_list'); 

            if (plot_cnt==1){prize_msg='<p>中了頭獎'+prize_arr[0]+'元</p>'; }
            else if (plot_cnt==2){prize_msg='<p>中了貳獎'+prize_arr[1]+'元</p>'; }
            else if (plot_cnt==3){prize_msg='<p>中了參獎'+prize_arr[2]+'元</p>'; }
            else {prize_msg="<p>什麼也沒有</p>"; }

            prize_list.innerHTML=prize_msg; 
        }
    }
}