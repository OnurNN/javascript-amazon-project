export const cart=[];

export  function addtoCart(productId){
    let matchingItem;

    cart.forEach((carttem)=>{
      if(productId===carttem.productId){
        matchingItem=carttem;
      }

    })

    if(matchingItem){
      matchingItem.quantity+=1;
    } else{
      cart.push({
        productId:productId,
        quantity: 1
      });
    }
  } 