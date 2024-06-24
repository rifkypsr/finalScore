function drawImage(n) {
    if (n % 2 === 0) {
        console.log("Parameter must be an odd number.");
        return;
    }

    for (let i = 0; i < n; i++) {
        let row = '';
        for (let pattern = 0; pattern < n; pattern++) {
            if (i % 2 === 0) {
                row += (pattern % 2 === 0 ? '* ' : '# ');
            } else {
                row += ( pattern % 2 === 0 ? '# ' : '* ');
            }
        }
        console.log(row.trim());
    }
}

// Test the function with 5 and 7
console.log("drawImage(5); akan dicetak di layar:");
drawImage(5);
console.log("\ndrawImage(7); akan dicetak di layar:");
drawImage(7);
