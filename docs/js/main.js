"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = this;
        _this.speed = 0;
        _this.div = document.createElement("car");
        var level = document.getElementsByTagName("level")[0];
        level.appendChild(_this.div);
        _this.x = (Math.random() * -400) - 168;
        _this.y = Math.ceil(Math.random() * 5) * 120;
        _this.speed = Math.random() * 2 + 2;
        _this.setColor();
        return _this;
    }
    Car.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Car.prototype.update = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.x = -168;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Car.prototype.setColor = function () {
        var color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
    };
    return Car;
}(GameObject));
var Game = (function () {
    function Game() {
        this.cars = [];
        this.score = 0;
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        this.player = new Player();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        this.player.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.update = function () {
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameObject = (function () {
    function GameObject() {
        this.x = 0;
        this.y = 0;
    }
    return GameObject;
}());
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game) {
        var _this = this;
        _this.div = document.createElement("player");
        var level = document.getElementsByTagName("level")[0];
        level.appendChild(_this.div);
        _this.x = 400;
        _this.y = 670;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    Player.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Player.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                this.x -= 102;
                break;
            case 68:
                this.x += 102;
                break;
            case 87:
                this.y -= 30;
                if (this.y < -50) {
                    this.y = 670;
                    console.log("de overkant gehaald!");
                }
                break;
            case 83:
                this.y += 30;
                break;
        }
    };
    return Player;
}(GameObject));
//# sourceMappingURL=main.js.map