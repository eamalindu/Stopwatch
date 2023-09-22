window.addEventListener('DOMContentLoaded',()=>{

    var startTime = 0;
    var elapsedTime = 0;
    var interval;

    const startBtn =  document.querySelector('#start');
    const pauseBtn =  document.querySelector('#pause');
    const resetBtn =  document.querySelector('#reset');

    pauseBtn.disabled = true;
    pauseBtn.classList.add('bg-black');

    resetBtn.disabled = true;
    resetBtn.classList.add('bg-black');


    // Update stopwatch display function
    function updateDisplay() {
        // Calculate elapsed time
        elapsedTime = Date.now() - startTime;

        // Convert elapsed time to seconds and milliseconds
        var seconds = Math.floor(elapsedTime / 1000);
        var milliseconds = elapsedTime % 1000;

        // Update display
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
        document.getElementById("tens").innerHTML = milliseconds.toString().padStart(3, "000");
    }

// Start stopwatch function
    function start() {
        // Start interval to update display every 10 milliseconds
        interval = setInterval(updateDisplay, 10);

        // Set start time
        startTime = Date.now();

        document.querySelector('.container-fluid').classList.add('bg-warning')
    }

// Stop stopwatch function
    function stop() {
        // Clear interval
        clearInterval(interval);

        // Stop stopwatch
        elapsedTime = 0;
        document.querySelector('.container-fluid').classList.remove('bg-warning')
        document.querySelector('.container-fluid').classList.add('bg-danger');

    }

// Reset stopwatch function
    function reset() {
        // Clear start time
        startTime = 0;

        // Reset display
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("tens").innerHTML = "000";
        document.querySelector('.container-fluid').classList.remove('bg-danger');
    }

    startBtn.addEventListener('click',()=>{
        start();
        startBtn.disabled = true;
        startBtn.classList.add('bg-black');
        pauseBtn.disabled = false;
        pauseBtn.classList.remove('bg-black');
    });

    pauseBtn.addEventListener('click',()=>{
        stop();
        pauseBtn.disabled = true;
        pauseBtn.classList.add('bg-black');
        resetBtn.disabled = false;
        resetBtn.classList.remove('bg-black');

    })
    resetBtn.addEventListener('click',()=>{
        reset();
        startBtn.disabled = false;
        startBtn.classList.remove('bg-black');
        resetBtn.disabled = true;
        resetBtn.classList.add('bg-black');
    })
});