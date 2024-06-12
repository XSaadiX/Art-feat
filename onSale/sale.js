document.addEventListener('DOMContentLoaded', function() {
    let bidButtons = document.querySelectorAll('.bid-button');
  
    bidButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        let auctionItem = this.closest('.auction-item');
        let itemId = auctionItem.getAttribute('data-item-id');
        let bidInput = auctionItem.querySelector('input[type="number"]');
        let bidAmount = parseFloat(bidInput.value);
  
        if (isNaN(bidAmount) || bidAmount <= 0) {
          displayBidMessage(auctionItem, 'Please enter a valid bid amount.');
          return;
        }
  
        let currentBid = parseFloat(auctionItem.querySelector('.current-bid').textContent.slice(1));
        if (bidAmount <= currentBid) {
          displayBidMessage(auctionItem, 'Your bid must be higher than the current bid.');
        } else {
          auctionItem.querySelector('.current-bid').textContent = '$' + bidAmount.toFixed(2);
          displayBidMessage(auctionItem, 'Bid placed successfully!');
        }
  
        bidInput.value = '';
      });
    });
  
    function displayBidMessage(auctionItem, message) {
      let bidMessage = auctionItem.querySelector('.bid-message');
      bidMessage.textContent = message;
      setTimeout(function() {
        bidMessage.textContent = '';
      }, 3000);
    }
  });
  