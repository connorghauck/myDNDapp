angular.module('dndApp')
       .controller('UpdateController', UpdateController);

function UpdateController($http, $location, CharacterService) {
    console.log('UpdateController loaded');

    var ctrl = this;

    ctrl.setSkillBonuses = function(){


        switch (ctrl.selectedId.strength){
            case 1:
                ctrl.selectedId.athleticsskill = '-5';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='IndianRed';
                break;
            case 2:
            case 3:
                ctrl.selectedId.athleticsskill = '-4';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#cf6363';
                break;
            case 4:
            case 5:
                ctrl.selectedId.athleticsskill = '-3';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#db8a8a';
                break;
            case 6:
            case 7:
                ctrl.selectedId.athleticsskill = '-2';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#e19d9d';
                break;
            case 8:
            case 9:
                ctrl.selectedId.athleticsskill = '-1';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#edc4c4';
                break;
            case 10:
            case 11:
                ctrl.selectedId.athleticsskill = '0';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#EEEEEE';
                break;
            case 12:
            case 13:
                ctrl.selectedId.athleticsskill = '1';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#80ffaa';
                break;
            case 14:
            case 15:
                ctrl.selectedId.athleticsskill = '2';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#1aff66';
                break;
            case 16:
            case 17:
                ctrl.selectedId.athleticsskill = '3';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00cc44';
                break;
            case 18:
            case 19:
                ctrl.selectedId.athleticsskill = '4';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#009933';
                break;
            case 20:
            case 21:
                ctrl.selectedId.athleticsskill = '5';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
            case 22:
            case 23:
                ctrl.selectedId.athleticsskill = '6';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
            case 24:
            case 25:
                ctrl.selectedId.athleticsskill = '7';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
            case 26:
            case 27:
                ctrl.selectedId.athleticsskill = '8';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
            case 28:
            case 29:
                ctrl.selectedId.athleticsskill = '9';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
            case 30:
            case 31:
                ctrl.selectedId.athleticsskill = '10';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
            case 32:
            case 33:
                ctrl.selectedId.athleticsskill = '11';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
            case 34:
            case 35:
                ctrl.selectedId.athleticsskill = '12';
                document.getElementsByName('charSkillsStr')[0].style.backgroundColor='#00802b';
                break;
        };

        switch (ctrl.selectedId.intelligence){
            case 1:
                ctrl.selectedId.arcanaskill = '-5';
                ctrl.selectedId.historyskill = '-5';
                ctrl.selectedId.investigationskill = '-5';
                ctrl.selectedId.natureskill = '-5';
                ctrl.selectedId.religionskill = '-5';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='IndianRed';
                break;
            case 2:
            case 3:
                ctrl.selectedId.arcanaskill = '-4';
                ctrl.selectedId.historyskill = '-4';
                ctrl.selectedId.investigationskill = '-4';
                ctrl.selectedId.natureskill = '-4';
                ctrl.selectedId.religionskill = '-4';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#cf6363';
                break;
            case 4:
            case 5:
                ctrl.selectedId.arcanaskill = '-3';
                ctrl.selectedId.historyskill = '-3';
                ctrl.selectedId.investigationskill = '-3';
                ctrl.selectedId.natureskill = '-3';
                ctrl.selectedId.religionskill = '-3';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#db8a8a';
                break;
            case 6:
            case 7:
                ctrl.selectedId.arcanaskill = '-2';
                ctrl.selectedId.historyskill = '-2';
                ctrl.selectedId.investigationskill = '-2';
                ctrl.selectedId.natureskill = '-2';
                ctrl.selectedId.religionskill = '-2';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#e19d9d';
                break;
            case 8:
            case 9:
                ctrl.selectedId.arcanaskill = '-1';
                ctrl.selectedId.historyskill = '-1';
                ctrl.selectedId.investigationskill = '-1';
                ctrl.selectedId.natureskill = '-1';
                ctrl.selectedId.religionskill = '-1';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#edc4c4';
                break;
            case 10:
            case 11:
                ctrl.selectedId.arcanaskill = '0';
                ctrl.selectedId.historyskill = '0';
                ctrl.selectedId.investigationskill = '0';
                ctrl.selectedId.natureskill = '0';
                ctrl.selectedId.religionskill = '0';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#EEEEEE';
                break;
            case 12:
            case 13:
                ctrl.selectedId.arcanaskill = '1';
                ctrl.selectedId.historyskill = '1';
                ctrl.selectedId.investigationskill = '1';
                ctrl.selectedId.natureskill = '1';
                ctrl.selectedId.religionskill = '1';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#80ffaa';
                break;
            case 14:
            case 15:
                ctrl.selectedId.arcanaskill = '2';
                ctrl.selectedId.historyskill = '2';
                ctrl.selectedId.investigationskill = '2';
                ctrl.selectedId.natureskill = '2';
                ctrl.selectedId.religionskill = '2';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#1aff66';
                break;
            case 16:
            case 17:
                ctrl.selectedId.arcanaskill = '3';
                ctrl.selectedId.historyskill = '3';
                ctrl.selectedId.investigationskill = '3';
                ctrl.selectedId.natureskill = '3';
                ctrl.selectedId.religionskill = '3';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00cc44';
                break;
            case 18:
            case 19:
                ctrl.selectedId.arcanaskill = '4';
                ctrl.selectedId.historyskill = '4';
                ctrl.selectedId.investigationskill = '4';
                ctrl.selectedId.natureskill = '4';
                ctrl.selectedId.religionskill = '4';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#009933';
                break;
            case 20:
            case 21:
                ctrl.selectedId.arcanaskill = '5';
                ctrl.selectedId.historyskill = '5';
                ctrl.selectedId.investigationskill = '5';
                ctrl.selectedId.natureskill = '5';
                ctrl.selectedId.religionskill = '5';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
            case 22:
            case 23:
                ctrl.selectedId.arcanaskill = '6';
                ctrl.selectedId.historyskill = '6';
                ctrl.selectedId.investigationskill = '6';
                ctrl.selectedId.natureskill = '6';
                ctrl.selectedId.religionskill = '6';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
            case 24:
            case 25:
                ctrl.selectedId.arcanaskill = '7';
                ctrl.selectedId.historyskill = '7';
                ctrl.selectedId.investigationskill = '7';
                ctrl.selectedId.natureskill = '7';
                ctrl.selectedId.religionskill = '7';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
            case 26:
            case 27:
                ctrl.selectedId.arcanaskill = '8';
                ctrl.selectedId.historyskill = '8';
                ctrl.selectedId.natureskill = '8';
                ctrl.selectedId.religionskill = '8';
                ctrl.selectedId.investigationskill = '8';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
            case 28:
            case 29:
                ctrl.selectedId.arcanaskill = '9';
                ctrl.selectedId.historyskill = '9';
                ctrl.selectedId.investigationskill = '9';
                ctrl.selectedId.natureskill = '9';
                ctrl.selectedId.religionskill = '9';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
            case 30:
            case 31:
                ctrl.selectedId.arcanaskill = '10';
                ctrl.selectedId.historyskill = '10';
                ctrl.selectedId.investigationskill = '10';
                ctrl.selectedId.natureskill = '10';
                ctrl.selectedId.religionskill = '10';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
            case 32:
            case 33:
                ctrl.selectedId.arcanaskill = '11';
                ctrl.selectedId.historyskill = '11';
                ctrl.selectedId.investigationskill = '11';
                ctrl.selectedId.natureskill = '11';
                ctrl.selectedId.religionskill = '11';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
            case 34:
            case 35:
                ctrl.selectedId.arcanaskill = '12';
                ctrl.selectedId.historyskill = '12';
                ctrl.selectedId.investigationskill = '12';
                ctrl.selectedId.natureskill = '12';
                ctrl.selectedId.religionskill = '12';
                document.getElementsByName('charSkillsInt')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsInt')[4].style.backgroundColor='#00802b';
                break;
        };

        switch (ctrl.selectedId.wisdom){
            case 1:
                ctrl.selectedId.animalhandlingskill = '-5';
                ctrl.selectedId.insightskill = '-5';
                ctrl.selectedId.medicineskill = '-5';
                ctrl.selectedId.perceptionskill = '-5';
                ctrl.selectedId.survivalskill = '-5';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='IndianRed';
                break;
            case 2:
            case 3:
                ctrl.selectedId.animalhandlingskill = '-4';
                ctrl.selectedId.insightskill = '-4';
                ctrl.selectedId.medicineskill = '-4';
                ctrl.selectedId.perceptionskill = '-4';
                ctrl.selectedId.survivalskill = '-4';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#cf6363';
                break;
            case 4:
            case 5:
                ctrl.selectedId.animalhandlingskill = '-3';
                ctrl.selectedId.insightskill = '-3';
                ctrl.selectedId.medicineskill = '-3';
                ctrl.selectedId.perceptionskill = '-3';
                ctrl.selectedId.survivalskill = '-3';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#db8a8a';
                break;
            case 6:
            case 7:
                ctrl.selectedId.animalhandlingskill = '-2';
                ctrl.selectedId.insightskill = '-2';
                ctrl.selectedId.medicineskill = '-2';
                ctrl.selectedId.perceptionskill = '-2';
                ctrl.selectedId.survivalskill = '-2';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#e19d9d';
                break;
            case 8:
            case 9:
                ctrl.selectedId.animalhandlingskill = '-1';
                ctrl.selectedId.insightskill = '-1';
                ctrl.selectedId.medicineskill = '-1';
                ctrl.selectedId.perceptionskill = '-1';
                ctrl.selectedId.survivalskill = '-1';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#edc4c4';
                break;
            case 10:
            case 11:
                ctrl.selectedId.animalhandlingskill = '0';
                ctrl.selectedId.insightskill = '0';
                ctrl.selectedId.medicineskill = '0';
                ctrl.selectedId.perceptionskill = '0';
                ctrl.selectedId.survivalskill = '0';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#EEEEEE';
                break;
            case 12:
            case 13:
                ctrl.selectedId.animalhandlingskill = '1';
                ctrl.selectedId.insightskill = '1';
                ctrl.selectedId.medicineskill = '1';
                ctrl.selectedId.perceptionskill = '1';
                ctrl.selectedId.survivalskill = '1';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#80ffaa';
                break;
            case 14:
            case 15:
                ctrl.selectedId.animalhandlingskill = '2';
                ctrl.selectedId.insightskill = '2';
                ctrl.selectedId.medicineskill = '2';
                ctrl.selectedId.perceptionskill = '2';
                ctrl.selectedId.survivalskill = '2';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#1aff66';
                break;
            case 16:
            case 17:
                ctrl.selectedId.animalhandlingskill = '3';
                ctrl.selectedId.insightskill = '3';
                ctrl.selectedId.medicineskill = '3';
                ctrl.selectedId.perceptionskill = '3';
                ctrl.selectedId.survivalskill = '3';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00cc44';
                break;
            case 18:
            case 19:
                ctrl.selectedId.animalhandlingskill = '4';
                ctrl.selectedId.insightskill = '4';
                ctrl.selectedId.medicineskill = '4';
                ctrl.selectedId.perceptionskill = '4';
                ctrl.selectedId.survivalskill = '4';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#009933';
                break;
            case 20:
            case 21:
                ctrl.selectedId.animalhandlingskill = '5';
                ctrl.selectedId.insightskill = '5';
                ctrl.selectedId.medicineskill = '5';
                ctrl.selectedId.perceptionskill = '5';
                ctrl.selectedId.survivalskill = '5';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
            case 22:
            case 23:
                ctrl.selectedId.animalhandlingskill = '6';
                ctrl.selectedId.insightskill = '6';
                ctrl.selectedId.medicineskill = '6';
                ctrl.selectedId.perceptionskill = '6';
                ctrl.selectedId.survivalskill = '6';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
            case 24:
            case 25:
                ctrl.selectedId.animalhandlingskill = '7';
                ctrl.selectedId.insightskill = '7';
                ctrl.selectedId.medicineskill = '7';
                ctrl.selectedId.perceptionskill = '7';
                ctrl.selectedId.survivalskill = '7';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
            case 26:
            case 27:
                ctrl.selectedId.animalhandlingskill = '8';
                ctrl.selectedId.insightskill = '8';
                ctrl.selectedId.perceptionskill = '8';
                ctrl.selectedId.survivalskill = '8';
                ctrl.selectedId.medicineskill = '8';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
            case 28:
            case 29:
                ctrl.selectedId.animalhandlingskill = '9';
                ctrl.selectedId.insightskill = '9';
                ctrl.selectedId.medicineskill = '9';
                ctrl.selectedId.perceptionskill = '9';
                ctrl.selectedId.survivalskill = '9';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
            case 30:
            case 31:
                ctrl.selectedId.animalhandlingskill = '10';
                ctrl.selectedId.insightskill = '10';
                ctrl.selectedId.medicineskill = '10';
                ctrl.selectedId.perceptionskill = '10';
                ctrl.selectedId.survivalskill = '10';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
            case 32:
            case 33:
                ctrl.selectedId.animalhandlingskill = '11';
                ctrl.selectedId.insightskill = '11';
                ctrl.selectedId.medicineskill = '11';
                ctrl.selectedId.perceptionskill = '11';
                ctrl.selectedId.survivalskill = '11';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
            case 34:
            case 35:
                ctrl.selectedId.animalhandlingskill = '12';
                ctrl.selectedId.insightskill = '12';
                ctrl.selectedId.medicineskill = '12';
                ctrl.selectedId.perceptionskill = '12';
                ctrl.selectedId.survivalskill = '12';
                document.getElementsByName('charSkillsWis')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[3].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsWis')[4].style.backgroundColor='#00802b';
                break;
        };

        switch (ctrl.selectedId.dexterity){
            case 1:
                ctrl.selectedId.acrobaticsskill = '-5';
                ctrl.selectedId.sleightofhandskill = '-5';
                ctrl.selectedId.stealthskill = '-5';
                ctrl.selectedId.initiative = '-5';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='IndianRed';
                break;
            case 2:
            case 3:
                ctrl.selectedId.acrobaticsskill = '-4';
                ctrl.selectedId.sleightofhandskill = '-4';
                ctrl.selectedId.stealthskill = '-4';
                ctrl.selectedId.initiative = '-4';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#cf6363';
                break;
            case 4:
            case 5:
                ctrl.selectedId.acrobaticsskill = '-3';
                ctrl.selectedId.sleightofhandskill = '-3';
                ctrl.selectedId.stealthskill = '-3';
                ctrl.selectedId.initiative = '-3';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#db8a8a';
                break;
            case 6:
            case 7:
                ctrl.selectedId.acrobaticsskill = '-2';
                ctrl.selectedId.sleightofhandskill = '-2';
                ctrl.selectedId.stealthskill = '-2';
                ctrl.selectedId.initiative = '-2';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#e19d9d';
                break;
            case 8:
            case 9:
                ctrl.selectedId.acrobaticsskill = '-1';
                ctrl.selectedId.sleightofhandskill = '-1';
                ctrl.selectedId.stealthskill = '-1';
                ctrl.selectedId.initiative = '-1';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#edc4c4';
                break;
            case 10:
            case 11:
                ctrl.selectedId.acrobaticsskill = '0';
                ctrl.selectedId.sleightofhandskill = '0';
                ctrl.selectedId.stealthskill = '0';
                ctrl.selectedId.initiative = '0';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#EEEEEE';
                break;
            case 12:
            case 13:
                ctrl.selectedId.acrobaticsskill = '1';
                ctrl.selectedId.sleightofhandskill = '1';
                ctrl.selectedId.stealthskill = '1';
                ctrl.selectedId.initiative = '1';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#80ffaa';
                break;
            case 14:
            case 15:
                ctrl.selectedId.acrobaticsskill = '2';
                ctrl.selectedId.sleightofhandskill = '2';
                ctrl.selectedId.stealthskill = '2';
                ctrl.selectedId.initiative = '2';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#1aff66';
                break;
            case 16:
            case 17:
                ctrl.selectedId.acrobaticsskill = '3';
                ctrl.selectedId.sleightofhandskill = '3';
                ctrl.selectedId.stealthskill = '3';
                ctrl.selectedId.initiative = '3';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00cc44';
                break;
            case 18:
            case 19:
                ctrl.selectedId.acrobaticsskill = '4';
                ctrl.selectedId.sleightofhandskill = '4';
                ctrl.selectedId.stealthskill = '4';
                ctrl.selectedId.initiative = '4';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#009933';
                break;
            case 20:
            case 21:
                ctrl.selectedId.acrobaticsskill = '5';
                ctrl.selectedId.sleightofhandskill = '5';
                ctrl.selectedId.stealthskill = '5';
                ctrl.selectedId.initiative = '5';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
            case 22:
            case 23:
                ctrl.selectedId.acrobaticsskill = '6';
                ctrl.selectedId.sleightofhandskill = '6';
                ctrl.selectedId.stealthskill = '6';
                ctrl.selectedId.initiative = '6';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
            case 24:
            case 25:
                ctrl.selectedId.acrobaticsskill = '7';
                ctrl.selectedId.sleightofhandskill = '7';
                ctrl.selectedId.stealthskill = '7';
                ctrl.selectedId.initiative = '7';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
            case 26:
            case 27:
                ctrl.selectedId.acrobaticsskill = '8';
                ctrl.selectedId.sleightofhandskill = '8';
                ctrl.selectedId.stealthskill = '8';
                ctrl.selectedId.initiative = '8';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
            case 28:
            case 29:
                ctrl.selectedId.acrobaticsskill = '9';
                ctrl.selectedId.sleightofhandskill = '9';
                ctrl.selectedId.stealthskill = '9';
                ctrl.selectedId.initiative = '9';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
            case 30:
            case 31:
                ctrl.selectedId.acrobaticsskill = '10';
                ctrl.selectedId.sleightofhandskill = '10';
                ctrl.selectedId.stealthskill = '10';
                ctrl.selectedId.initiative = '10';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
            case 32:
            case 33:
                ctrl.selectedId.acrobaticsskill = '11';
                ctrl.selectedId.sleightofhandskill = '11';
                ctrl.selectedId.stealthskill = '11';
                ctrl.selectedId.initiative = '11';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
            case 34:
            case 35:
                ctrl.selectedId.acrobaticsskill = '12';
                ctrl.selectedId.sleightofhandskill = '12';
                ctrl.selectedId.stealthskill = '12';
                ctrl.selectedId.initiative = '12';
                document.getElementsByName('charSkillsDex')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsDex')[3].style.backgroundColor='#00802b';
                break;
        };

        switch (ctrl.selectedId.charisma){
            case 1:
                ctrl.selectedId.deceptionskill = '-5';
                ctrl.selectedId.intimidationskill = '-5';
                ctrl.selectedId.performanceskill = '-5';
                ctrl.selectedId.persuasionskill = '-5';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='IndianRed';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='IndianRed';
                break;
            case 2:
            case 3:
                ctrl.selectedId.deceptionskill = '-4';
                ctrl.selectedId.intimidationskill = '-4';
                ctrl.selectedId.performanceskill = '-4';
                ctrl.selectedId.persuasionskill = '-4';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#cf6363';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#cf6363';
                break;
            case 4:
            case 5:
                ctrl.selectedId.deceptionskill = '-3';
                ctrl.selectedId.intimidationskill = '-3';
                ctrl.selectedId.performanceskill = '-3';
                ctrl.selectedId.persuasionskill = '-3';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#db8a8a';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#db8a8a';
                break;
            case 6:
            case 7:
                ctrl.selectedId.deceptionskill = '-2';
                ctrl.selectedId.intimidationskill = '-2';
                ctrl.selectedId.performanceskill = '-2';
                ctrl.selectedId.persuasionskill = '-2';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#e19d9d';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#e19d9d';
                break;
            case 8:
            case 9:
                ctrl.selectedId.deceptionskill = '-1';
                ctrl.selectedId.intimidationskill = '-1';
                ctrl.selectedId.performanceskill = '-1';
                ctrl.selectedId.persuasionskill = '-1';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#edc4c4';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#edc4c4';
                break;
            case 10:
            case 11:
                ctrl.selectedId.deceptionskill = '0';
                ctrl.selectedId.intimidationskill = '0';
                ctrl.selectedId.performanceskill = '0';
                ctrl.selectedId.persuasionskill = '0';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#EEEEEE';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#EEEEEE';
                break;
            case 12:
            case 13:
                ctrl.selectedId.deceptionskill = '1';
                ctrl.selectedId.intimidationskill = '1';
                ctrl.selectedId.performanceskill = '1';
                ctrl.selectedId.persuasionskill = '1';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#80ffaa';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#80ffaa';
                break;
            case 14:
            case 15:
                ctrl.selectedId.deceptionskill = '2';
                ctrl.selectedId.intimidationskill = '2';
                ctrl.selectedId.performanceskill = '2';
                ctrl.selectedId.persuasionskill = '2';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#1aff66';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#1aff66';
                break;
            case 16:
            case 17:
                ctrl.selectedId.deceptionskill = '3';
                ctrl.selectedId.intimidationskill = '3';
                ctrl.selectedId.performanceskill = '3';
                ctrl.selectedId.persuasionskill = '3';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00cc44';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00cc44';
                break;
            case 18:
            case 19:
                ctrl.selectedId.deceptionskill = '4';
                ctrl.selectedId.intimidationskill = '4';
                ctrl.selectedId.performanceskill = '4';
                ctrl.selectedId.persuasionskill = '4';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#009933';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#009933';
                break;
            case 20:
            case 21:
                ctrl.selectedId.deceptionskill = '5';
                ctrl.selectedId.intimidationskill = '5';
                ctrl.selectedId.performanceskill = '5';
                ctrl.selectedId.persuasionskill = '5';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
            case 22:
            case 23:
                ctrl.selectedId.deceptionskill = '6';
                ctrl.selectedId.intimidationskill = '6';
                ctrl.selectedId.performanceskill = '6';
                ctrl.selectedId.persuasionskill = '6';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
            case 24:
            case 25:
                ctrl.selectedId.deceptionskill = '7';
                ctrl.selectedId.intimidationskill = '7';
                ctrl.selectedId.performanceskill = '7';
                ctrl.selectedId.persuasionskill = '7';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
            case 26:
            case 27:
                ctrl.selectedId.deceptionskill = '8';
                ctrl.selectedId.intimidationskill = '8';
                ctrl.selectedId.performanceskill = '8';
                ctrl.selectedId.persuasionskill = '8';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
            case 28:
            case 29:
                ctrl.selectedId.deceptionskill = '9';
                ctrl.selectedId.intimidationskill = '9';
                ctrl.selectedId.performanceskill = '9';
                ctrl.selectedId.persuasionskill = '9';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
            case 30:
            case 31:
                ctrl.selectedId.deceptionskill = '10';
                ctrl.selectedId.intimidationskill = '10';
                ctrl.selectedId.performanceskill = '10';
                ctrl.selectedId.persuasionskill = '10';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
            case 32:
            case 33:
                ctrl.selectedId.deceptionskill = '11';
                ctrl.selectedId.intimidationskill = '11';
                ctrl.selectedId.performanceskill = '11';
                ctrl.selectedId.persuasionskill = '11';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
            case 34:
            case 35:
                ctrl.selectedId.deceptionskill = '12';
                ctrl.selectedId.intimidationskill = '12';
                ctrl.selectedId.performanceskill = '12';
                ctrl.selectedId.persuasionskill = '12';
                document.getElementsByName('charSkillsChar')[0].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[1].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[2].style.backgroundColor='#00802b';
                document.getElementsByName('charSkillsChar')[3].style.backgroundColor='#00802b';
                break;
        };

}

    $http.get('/alignments').then(function(response){
        console.log('getting alignments', response);
        ctrl.alignments = response.data;
    });

    $http.get('/races').then(function(response){
        console.log('getting races', response);
        ctrl.races = response.data;
    });

    $http.get('/charclass').then(function(response){
        console.log('getting classes', response);
        ctrl.classes = response.data;
    });
    ctrl.selectedId = CharacterService.currentlySelectedCharacter;
    console.log(CharacterService.currentlySelectedCharacter);
console.log('WHAT THE FUCJ', ctrl.selectedId);
    ctrl.sheet = function() {
        console.log('logging in');
        $http.put('/update/' + ctrl.selectedId.id, ctrl.selectedId
        ).then(function(response){
            $location.path('/home');
        }, function(error) {
            console.log('error workin', error);
        });
    };
}
