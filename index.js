var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


const leastFavoriteCustomer = 'some guy';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new guy'
}



// const leastFavoriteCustomer = 'some value';
// function changeLeastFavoriteCustomer() {
//     leastFavoriteCustomer = 'some other value';

// }

//   describe('changeLeastFavoriteCustomer()', function() {
//     it('unsuccessfully tries to reassign the least favorite customer', function() {
//       expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//     });
//   });
// });
