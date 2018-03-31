document.addEventListener('DOMContentLoaded',function(){

        document.querySelectorAll('#change').forEach(cell =>{
        cell.onclick =()=> {
            mark = prompt('Enter the mark');
            if(mark != null)
                {
                    request = new XMLHttpRequest();
                     request.open('POST','/teacher_ajax');
                    request.onload=function()
                    {
                        cell.innerHTML=mark;

                    }
                    data_send = new FormData();
                   
                    data_send.append('id',cell.dataset.id);
                    
                    data_send.append('mark',mark);
                    data_send.append('examid',cell.dataset.examid);
                    data_send.append('type',cell.dataset.type);

                    request.send(data_send);
                }
        }
    });

});