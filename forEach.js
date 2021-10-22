const movements = [200, 300, -400, 500, -600, 800, 1200, -100];

movements.forEach((movement,index) => {
    movement > 0
      ? console.log(`Number ${index + 1}: You deposite ${movement}`)
      : console.log(`Number ${index + 1}: You widthdrew ${Math.abs(movement)}`);
});




//  For loop and ForEach এর মধ্যে প্রধান এবং একমাত্র পার্থক্য হলে ForEach এ break and continue statement ব্যবহার করা যায় না।