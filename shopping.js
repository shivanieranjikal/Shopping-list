
var items = []

function add(product,quantity){
   let singleObj = {
    "name": document.getElementById('product').value,
    "qty": document.getElementById('quantity').value
   }
   items.push(singleObj)
   console.log(items)

      var e=''
      var sum=0
     
      e+='<table id="list">'
      e+='<tr>'
      e+='<th>'+'Product Name'+'</th>'
      e+='<th>'+'Quantity'+'</th>'
      e+='</tr>'

   for(var i=0;i<items.length;i++)
   {
      e+='<tr>'
      e+='<td>'+items[i].name +'</td> '
      e+='<td>'+items[i].qty +'</td> '
      sum+=parseInt(items[i].qty)
      e+='</tr>'
   }
   e+='<tr>'
   e+='<td>'+'<b>Total</b>' +'</td> '
   e+='<td>'+'<b>'+sum+'</b>'+'</td> '
   e+='</tr>'
   e+='</table>'
   document.getElementById('result').innerHTML=e
}

