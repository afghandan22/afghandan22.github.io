const answers = {};

var myGameArea = {
    canvas: document.getElementById("gameCanvas"),
    input: null,
    USERSname: null,
    backgroundImage: null,
    start: function () {
        this.canvas.width = 1200;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");

        var self = this;

        this.backgroundImage = new Image();
        this.backgroundImage.onload = function () {
            self.context.drawImage(self.backgroundImage, 0, 0);
            self.context.font = "bold 30px Arial";
            self.context.fillStyle = "#ffffff";
            self.context.fillText("Click to Start", 520, 375);

            if (self.backgroundImage.src.includes("Scene0")) {
                self.input.draw();
            }
        };
        this.backgroundImage.src = "images/Scene0.png";

        this.input = new CanvasInput({
            canvas: self.canvas,
            x: 450,
            y: 350,
            fontSize: 18,
            fontFamily: 'Arial',
            fontColor: '#212121',
            fontWeight: 'bold',
            width: 300,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 3,
            boxShadow: '1px 1px 0px #fff',
            innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
            placeHolder: 'Enter name to start...',
            onsubmit: function () {
                self.USERSname = self.input.value();
                self.input.destroy();
                self.backgroundImage = new Image();
                self.backgroundImage.onload = function () {
                    self.context.drawImage(self.backgroundImage, 0, 0);

                    if (self.backgroundImage.src.includes("Scene1")) {
                        self.context.font = "68px Minecraftia-Regular";
                        self.context.fillStyle = "#ffffff";
                        self.context.fillText(self.USERSname + "!", 800, 600);
                        self.context.font = "bold 32px Arial";
                        self.context.fillStyle = "#777777";
                        self.context.fillText("CONTINUE>>>", 510, 650);
                        var continueClicked = false;
                        self.canvas.addEventListener('click', function (event) {
                            var x = event.pageX - self.canvas.offsetLeft;
                            var y = event.pageY - self.canvas.offsetTop;
                            if (x >= 500 && x <= 700 && y >= 600 && y <= 650 && !continueClicked) {
                                continueClicked = true;
                                self.canvas.removeEventListener('mousemove', mousemoveHandler);
                                self.clearCanvas();
                                self.startScene2();
                            }
                        });
                        var mousemoveHandler = function (event) {
                            var x = event.pageX - self.canvas.offsetLeft;
                            var y = event.pageY - self.canvas.offsetTop;
                            if (x >= 500 && x <= 700 && y >= 600 && y <= 650) {
                                self.context.fillStyle = "#cccccc";
                                self.context.fillText("CONTINUE>>>", 510, 650);
                            } else {
                                self.context.fillStyle = "#777777";
                                self.context.fillText("CONTINUE>>>", 510, 650);
                            }
                        };
                        self.canvas.addEventListener('mousemove', mousemoveHandler);
                    }
                };
                self.backgroundImage.src = "images/Scene1.png";
            }
        });
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },


    startScene2: function () {
        this.backgroundImage = new Image();
        var self = this;
        this.backgroundImage.onload = function () {
            self.context.drawImage(self.backgroundImage, 0, 0);
            if (self.backgroundImage.src.includes("Scene2")) {
                self.context.font = "bold 32px Arial";
                self.context.fillStyle = "#ffffff";
                self.context.fillText("[A]", 400, 650);
                self.context.fillText("[B]", 600, 650);
                self.context.fillText("[C]", 800, 650);
                var clickHandler = function (event) {
                    var x = event.pageX - self.canvas.offsetLeft;
                    var y = event.pageY - self.canvas.offsetTop;
                    if (x >= 400 && x <= 480 && y >= 630 && y <= 650) {
                        console.log("[A] pressed. Test complete.");
                        answers["Challenge 1"] = "Option A";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene3();
                    } else if (x >= 600 && x <= 680 && y >= 630 && y <= 650) {
                        console.log("[B] pressed. Test complete.");
                        answers["Challenge 1"] = "Option B";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene3();
                    } else if (x >= 800 && x <= 880 && y >= 630 && y <= 650) {
                        console.log("[C] pressed. Test complete.");
                        answers["Challenge 1"] = "Option C";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene3();
                    }
                };

                self.canvas.addEventListener("click", clickHandler);
            }
        };
        this.backgroundImage.src = "images/Scene2.png";
    },

    startScene3: function () {




        this.backgroundImage = new Image();
        var self = this;
        this.backgroundImage.onload = function () {

            myGameArea.context.drawImage(self.backgroundImage, 0, 0);


            if (self.backgroundImage.src.includes("Scene3")) {

                self.context.font = "bold 32px Arial";
                self.context.fillStyle = "#ffffff";
                self.context.fillText("[A]", 400, 650);
                self.context.fillText("[B]", 600, 650);

                var clickHandler = function (event) {
                    var x = event.pageX - self.canvas.offsetLeft;
                    var y = event.pageY - self.canvas.offsetTop;

                    if (x >= 400 && x <= 480 && y >= 630 && y <= 650) {
                        console.log("[A] pressed. Test complete.");
                        answers["Challenge 2"] = "Option A";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene4();
                    } else if (x >= 600 && x <= 680 && y >= 630 && y <= 650) {
                        console.log("[B] pressed. Test complete.");
                        answers["Challenge 2"] = "Option B";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene4();
                    }
                };


                self.canvas.addEventListener("click", clickHandler);
            }
        };
        this.backgroundImage.src = "images/Scene3.png";
    },

    startScene4: function () {
        this.backgroundImage = new Image();
        var self = this;
        this.backgroundImage.onload = function () {
            self.context.drawImage(self.backgroundImage, 0, 0);
            if (self.backgroundImage.src.includes("Scene4")) {
                self.context.font = "bold 32px Arial";
                self.context.fillStyle = "#ffffff";
                self.context.fillText("[A]", 400, 650);
                self.context.fillText("[B]", 600, 650);
                self.context.fillText("[C]", 800, 650);
                var clickHandler = function (event) {
                    var x = event.pageX - self.canvas.offsetLeft;
                    var y = event.pageY - self.canvas.offsetTop;
                    if (x >= 400 && x <= 480 && y >= 630 && y <= 650) {
                        console.log("[A] pressed. Test complete.");
                        answers["Challenge 3"] = "Option A";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene5();
                    } else if (x >= 600 && x <= 680 && y >= 630 && y <= 650) {
                        console.log("[B] pressed. Test complete.");
                        answers["Challenge 3"] = "Option B";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene5();
                    } else if (x >= 800 && x <= 880 && y >= 630 && y <= 650) {
                        console.log("[C] pressed. Test complete.");
                        answers["Challenge 3"] = "Option C";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene5();
                    }
                };

                self.canvas.addEventListener("click", clickHandler);
            }
        };
        this.backgroundImage.src = "images/Scene4.png";
    },

    startScene5: function () {




        this.backgroundImage = new Image();
        var self = this;
        this.backgroundImage.onload = function () {

            myGameArea.context.drawImage(self.backgroundImage, 0, 0);


            if (self.backgroundImage.src.includes("Scene5")) {

                self.context.font = "bold 32px Arial";
                self.context.fillStyle = "#ffffff";
                self.context.fillText("[A]", 400, 650);
                self.context.fillText("[B]", 600, 650);

                var clickHandler = function (event) {
                    var x = event.pageX - self.canvas.offsetLeft;
                    var y = event.pageY - self.canvas.offsetTop;

                    if (x >= 400 && x <= 480 && y >= 630 && y <= 650) {
                        console.log("[A] pressed. Test complete.");
                        answers["Challenge 4"] = "Option A";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene6();
                    } else if (x >= 600 && x <= 680 && y >= 630 && y <= 650) {
                        console.log("[B] pressed. Test complete.");
                        answers["Challenge 4"] = "Option B";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene6();
                    }
                };


                self.canvas.addEventListener("click", clickHandler);
            }
        };
        this.backgroundImage.src = "images/Scene5.png";
    },

    startScene6: function () {




        this.backgroundImage = new Image();
        var self = this;
        this.backgroundImage.onload = function () {

            myGameArea.context.drawImage(self.backgroundImage, 0, 0);


            if (self.backgroundImage.src.includes("Scene6")) {

                self.context.font = "bold 32px Arial";
                self.context.fillStyle = "#ffffff";
                self.context.fillText("[A]", 400, 670);
                self.context.fillText("[B]", 600, 670);

                var clickHandler = function (event) {
                    var x = event.pageX - self.canvas.offsetLeft;
                    var y = event.pageY - self.canvas.offsetTop;

                    if (x >= 400 && x <= 480 && y >= 650 && y <= 670) {
                        console.log("[A] pressed. Test complete.");
                        answers["Challenge 5"] = "Option A";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene7();
                    } else if (x >= 600 && x <= 680 && y >= 650 && y <= 670) {
                        console.log("[B] pressed. Test complete.");
                        answers["Challenge 5"] = "Option B";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene7();
                    }
                };


                self.canvas.addEventListener("click", clickHandler);
            }
        };
        this.backgroundImage.src = "images/Scene6.png";
    },

    startScene7: function () {




        this.backgroundImage = new Image();
        var self = this;
        this.backgroundImage.onload = function () {

            myGameArea.context.drawImage(self.backgroundImage, 0, 0);


            if (self.backgroundImage.src.includes("Scene7")) {

                self.context.font = "bold 32px Arial";
                self.context.fillStyle = "#ffffff";
                self.context.fillText("[A]", 400, 650);
                self.context.fillText("[B]", 600, 650);

                var clickHandler = function (event) {
                    var x = event.pageX - self.canvas.offsetLeft;
                    var y = event.pageY - self.canvas.offsetTop;

                    if (x >= 400 && x <= 480 && y >= 630 && y <= 650) {
                        console.log("[A] pressed. Test complete.");
                        answers["Challenge 6"] = "Option A";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene8();
                    } else if (x >= 600 && x <= 680 && y >= 630 && y <= 650) {
                        console.log("[B] pressed. Test complete.");
                        answers["Challenge 6"] = "Option B";
                        console.log(answers);
                        self.canvas.removeEventListener("click", clickHandler);
                        self.clearCanvas();
                        self.startScene8();
                    }
                };


                self.canvas.addEventListener("click", clickHandler);
            }
        };
        this.backgroundImage.src = "images/Scene7.png";
    },

    startScene8: function () {
        var numWrongAnswers = 0;
        var wrongAnswers = [];

        var self = this;

        if (answers["Challenge 1"] != "Option C" && answers["Challenge 5"] != "Option B") {
            numWrongAnswers++;
            wrongAnswers.push("Challenge 1: " + answers["Challenge 1"] + " (You must only share personal data with the person who the data belongs to or confirmed next of kin.)");
            console.log("CHECK COMPLETE 1");
        }
    
        if (answers["Challenge 2"] != "Option B") {
            numWrongAnswers++;
            wrongAnswers.push("Challenge 2: " + answers["Challenge 2"] + " (You must not let information leaks go unreported, this can open the hospital up to be sued,\nfined or even jail sentences.)");
            console.log("CHECK COMPLETE 2");
        }
    
        if (answers["Challenge 3"] != "Option B") {
            numWrongAnswers++;
            wrongAnswers.push("Challenge 3: " + answers["Challenge 3"] + " (Every person has the right to request all of their data from a company.)");
            console.log("CHECK COMPLETE 3");
        }
    
        if (answers["Challenge 4"] != "Option B") {
            numWrongAnswers++;
            wrongAnswers.push("Challenge 4: " + answers["Challenge 4"] + " (Data breaches can open the hospital up to being sued, fined or even jail sentences.)");
            console.log("CHECK COMPLETE 4");
        }
    
        if (answers["Challenge 5"] != "Option B") {
            numWrongAnswers++;
            wrongAnswers.push("Challenge 5: " + answers["Challenge 5"] + " (A patients medical records should not be left under such little protection, this is a breach of GDPR.)");
            console.log("CHECK COMPLETE 5");
        }
    
        if (answers["Challenge 6"] != "Option B") {
            numWrongAnswers++;
            wrongAnswers.push("Challenge 6: " + answers["Challenge 6"] + " (The more chances a hacker has to do something malicious, the more reasons the hospital can be in\nbreach of GDPR.)");
            console.log("CHECK COMPLETE 6");
        }
    
    
        this.backgroundImage = new Image();
        this.backgroundImage.onload = function () {
    
            myGameArea.context.drawImage(self.backgroundImage, 0, 0);
    
            self.context.font = "32px Arial";
            self.context.fillStyle = "#ffffff";
            self.context.fillText("Test Results", 25, 170);
            self.context.font = "24px Arial";
            self.context.fillText("Number of wrong answers: " + numWrongAnswers + "/6", 25, 200 );
    
            if (numWrongAnswers > 0) {
                var button = document.createElement('button');
                button.textContent = 'Click here for more training on these topics';
                button.style.position = "absolute";
                button.style.left = "450px";
                button.style.top = "730px";
                button.addEventListener('click', function() {
                window.location.href = 'https://mudfoot.doc.stu.mmu.ac.uk/students/afghanda/Privacy%20Website/teaching_material.html';
                });
                    document.body.appendChild(button);
                self.context.fillText("Wrong answers:", 25, 250);
                for (var i = 0; i < wrongAnswers.length; i++) {
                    self.context.font = "18px Arial";
                    self.context.fillText(wrongAnswers[i], 25, 290 + (i * 30));
                }
                console.log(wrongAnswers)
            } else {
                self.context.font = "32px Arial";
                self.context.fillText("Congratulations, you got all the answers right!", 300, 350);
            }
        };
        this.backgroundImage.src = "images/Scene8.png";
    },



    clearCanvas: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

myGameArea.start();

var refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", function() {
  location.reload();
});