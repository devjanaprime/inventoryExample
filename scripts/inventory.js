var searchInventory = function(){
  console.log(' in searchInventory' );
  // get input from user
  var size = document.getElementById( 'sizeIn' ).value;
  console.log( 'looking for something ' + size );
  var color = document.getElementById( 'colorIn' ).value;
  console.log( 'and ' + color );

  if( size == 'large' ){
    if( color == 'blue'){
      console.log( 'ocean' );
    }
    else if( color == 'green'){
      console.log( 'The Credible Hulk');
    }
    else if( color == 'red'){
      console.log( 'Santa' );
    }
    else {
      console.log( 'wut color?' );
    }
  }
  else if( size == 'medium' ){
    if( color == 'blue'){
      console.log( 'lake' );
    }
    else if( color == 'green'){
      console.log( 'The Grinch');
    }
    else if( color == 'red'){
      console.log( 'Mrs. Claus' );
    }
    else {
      console.log( 'wut color?' );
    }
  }
  else if( size == 'small' ){
    if( color == 'blue'){
      console.log( 'Sapphire Ring' );
    }
    else if( color == 'green'){
      console.log( 'Frog');
    }
    else if( color == 'red'){
      console.log( 'vial of blood' );
    }
    else {
      console.log( 'wut color?' );
    }
  }
  else {
    console.log( 'that size makes no sense here' );
  }
}
