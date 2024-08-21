const object1 = {
    property1: 42,
  };
  
  const a = Object.seal(object1);
  a.property1 = 33;
  console.log(object1.property1);
  // Expected output: 33
  a.key2 = 9;
  console.log(a)
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1);
  // Expected output: 33

  console.log(object1)