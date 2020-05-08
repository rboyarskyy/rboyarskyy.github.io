   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'Добровільне завдання самому собі усвідомлених цілей і завдань самовдосконалення - це ...', options:['самообов`язок','самозвіт','осмислення власних дій','самоконтроль'],answer:1},

                          {q:'Благо, що спрямоване на самовдосконалення, на особистісний ріст і самоусвідомлення - це ...',options:['самооцінка','самопрограмування','самопрезентація','самовдосконалення'],answer:2},

                          {q:'Форма освіти, під час якої людина навчає і виховує сама себе - це ...',options:['самозвіт','дистанційне навчання','самонавчання','самооцінка'],answer:3},

                          {q:'Що допомагає актуалізувати наше самонавчання?',options:['наші знання з "предмету/дисципліни','вивчення нової інформації з певних галузь','наші здібності','всі відповіді є вірними'],answer:4},

                          {q:'Форма освіти, під час якої людина навчає і виховує сама себе - це ...',options:['самозвіт','дистанційне навчання','самонавчання','самооцінка'],answer:3},

                          {q:'Яку знащучість завжди має самонавчання?',options:['юридичну','особисту','відносну','шкільну'],answer:2},

                          {q:'Що передбачає самонавчання?',options:['постійна робота над собою, яка стосується кожної сфери','самостійне опрацювання','виконання певних обов`язків','нічого з вище переліченого'],answer:1},
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Тест успішно закінчено. Результат нижче!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Вірно!";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Не вірно!";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score+"/"+this.questions.length;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



