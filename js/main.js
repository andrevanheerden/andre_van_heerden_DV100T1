function decreaseMars(){
    if (document.getElementById('ticketsMars').value !=0){
    document.getElementById('ticketsMars').value = parseInt(document.
    getElementById('ticketsMars').value)-1;
    } else{document.getElementById('ticketsMars').value = 0;
    }
}
    function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.
    getElementById('ticketsMars').value) + 1;
    }


 
    

    function decreaseNeptune(){
        if (document.getElementById('ticketsNeptune').value !=0){
        document.getElementById('ticketsNeptune').value = parseInt(document.
        getElementById('ticketsNeptune').value)-1;
        } else{document.getElementById('ticketsNeptune').value = 0;
        }
    }
        function increaseNeptune(){
        document.getElementById('ticketsNeptune').value = parseInt(document.
        getElementById('ticketsNeptune').value) + 1;
        }
        





        function decreaseJupiter(){
            if (document.getElementById('ticketsJupiter').value !=0){
            document.getElementById('ticketsJupiter').value = parseInt(document.
            getElementById('ticketsJupiter').value)-1;
            } else{document.getElementById('ticketsJupiter').value = 0;
            }
        }
            function increaseJupiter(){
            document.getElementById('ticketsJupiter').value = parseInt(document.
            getElementById('ticketsJupiter').value) + 1;
            }





        function decreaseSaturn(){
            if (document.getElementById('ticketsSaturn').value !=0){
            document.getElementById('ticketsSaturn').value = parseInt(document.
            getElementById('ticketsSaturn').value)-1;
            } else{document.getElementById('ticketsSaturn').value = 0;
            }
        }
            function increaseSaturn(){
            document.getElementById('ticketsSaturn').value = parseInt(document.
            getElementById('ticketsSaturn').value) + 1;
            }





            function decreaseUranus(){
                if (document.getElementById('ticketsUranus').value !=0){
                document.getElementById('ticketsUranus').value = parseInt(document.
                getElementById('ticketsUranus').value)-1;
                } else{document.getElementById('ticketsUranus').value = 0;
                }
            }
                function increaseUranus(){
                document.getElementById('ticketsUranus').value = parseInt(document.
                getElementById('ticketsUranus').value) + 1;
                }





                function decreaseMoon(){
                    if (document.getElementById('ticketsMoon').value !=0){
                    document.getElementById('ticketsMoon').value = parseInt(document.
                    getElementById('ticketsMoon').value)-1;
                    } else{document.getElementById('ticketsMoon').value = 0;
                    }
                }
                    function increaseMoon(){
                    document.getElementById('ticketsMoon').value = parseInt(document.
                    getElementById('ticketsMoon').value) + 1;
                    }



    let totalMarsCost =0;
    let totalNeptuneCost =0;
    let totalJupiterCost =0;
    let totalSaturnCost =0;
    let totalUranusCost =0;
    let totalMoonCost =0;
    let totalCost=0;

    function total(){
        totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 25000.00;
        totalNeptuneCost = parseInt(document.getElementById('ticketsNeptune').value) * 45000.00;
        totalJupiterCost = parseInt(document.getElementById('ticketsJupiter').value) * 65000.00;
        totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 40000.00;
        totalUranusCost = parseInt(document.getElementById('ticketsUranus').value) * 50000.00;
        totalMoonCost = parseInt(document.getElementById('ticketsMoon').value) * 15000.00;

        totalCost= totalMarsCost + totalNeptuneCost + totalJupiterCost + totalSaturnCost + totalUranusCost + totalMoonCost;
        document.getElementById('total').innerHTML = "R " + totalCost;
    }



    document.getElementById("contactForm").addEventListener("submit", function(onclick){
        onclick.preventDefault(); 
    
       
        let modal = document.getElementById("thankYouModal");
        modal.style.display = "block";
    
       
        let span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
    
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    
        document.getElementById("contactForm").reset();
    });



    function searchFunction() {
        let input = document.getElementById('searchInput').value.toLowerCase();
        let items = document.getElementsByClassName('col-md-8');

        for (let i = 0; i < items.length; i++) {
            let h3 = items[i].getElementsByTagName('h3')[0];
            if (h3.innerHTML.toLowerCase().indexOf(input) > -1) {
                items[i].style.display = '';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
