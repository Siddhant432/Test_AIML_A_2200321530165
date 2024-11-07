let rate = 1;
        let btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            let fromCurr = document.querySelector('#from').value;
            let toCurr = document.querySelector('#to').value;
            let url = `https://api.exchangerate-api.com/v4/latest/${fromCurr}`;
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                rate = data.rates[toCurr.toUpperCase()];
                let amt = parseFloat(document.querySelector('#amt').value);
                let convertedAmt = amt * rate;
                let conamt = document.querySelector('#conamt');
                conamt.value = convertedAmt.toFixed(2);
            })
        });