angular.module('dndApp')
       .controller('SheetController', SheetController);

function SheetController($http, $location) {
    console.log('SheetController loaded');
    var ctrl = this;

    ctrl.setSkillBonuses = function(){

        console.log(ctrl.character.characterStr);
        switch (ctrl.character.characterStr){
            case '1':
                ctrl.character.characterSkillsAthletics = '-5';
                break;
            case '2':
            case '3':
                ctrl.character.characterSkillsAthletics = '-4';
                break;
            case '4':
            case '5':
                ctrl.character.characterSkillsAthletics = '-3';
                break;
            case '6':
            case '7':
                ctrl.character.characterSkillsAthletics = '-2';
                break;
            case '8':
            case '9':
                ctrl.character.characterSkillsAthletics = '-1';
                break;
            case '10':
            case '11':
                ctrl.character.characterSkillsAthletics = '0';
                break;
            case '12':
            case '13':
                ctrl.character.characterSkillsAthletics = '+1';
                break;
            case '14':
            case '15':
                ctrl.character.characterSkillsAthletics = '+2';
                break;
            case '16':
            case '17':
                ctrl.character.characterSkillsAthletics = '+3';
                break;
            case '18':
            case '19':
                ctrl.character.characterSkillsAthletics = '+4';
                break;
            case '20':
            case '21':
                ctrl.character.characterSkillsAthletics = '+5';
                break;
            case '22':
            case '23':
                ctrl.character.characterSkillsAthletics = '6';
                break;
            case '24':
            case '25':
                ctrl.character.characterSkillsAthletics = '7';
                break;
            case '26':
            case '27':
                ctrl.character.characterSkillsAthletics = '8';
                break;
            case '28':
            case '29':
                ctrl.character.characterSkillsAthletics = '9';
                break;
            case '30':
            case '31':
                ctrl.character.characterSkillsAthletics = '10';
                break;
            case '32':
            case '33':
                ctrl.character.characterSkillsAthletics = '11';
                break;
            case '34':
            case '35':
                ctrl.character.characterSkillsAthletics = '12';
                break;
        };

        switch (ctrl.character.characterInt){
            case '1':
                ctrl.character.characterSkillsArcana = '-5';
                ctrl.character.characterSkillsHistory = '-5';
                ctrl.character.characterSkillsInvestigation = '-5';
                ctrl.character.characterSkillsNature = '-5';
                ctrl.character.characterSkillsReligion = '-5';
                break;
            case '2':
            case '3':
                ctrl.character.characterSkillsArcana = '-4';
                ctrl.character.characterSkillsHistory = '-4';
                ctrl.character.characterSkillsInvestigation = '-4';
                ctrl.character.characterSkillsNature = '-4';
                ctrl.character.characterSkillsReligion = '-4';

                break;
            case '4':
            case '5':
                ctrl.character.characterSkillsArcana = '-3';
                ctrl.character.characterSkillsHistory = '-3';
                ctrl.character.characterSkillsInvestigation = '-3';
                ctrl.character.characterSkillsNature = '-3';
                ctrl.character.characterSkillsReligion = '-3';

                break;
            case '6':
            case '7':
                ctrl.character.characterSkillsArcana = '-2';
                ctrl.character.characterSkillsHistory = '-2';
                ctrl.character.characterSkillsInvestigation = '-2';
                ctrl.character.characterSkillsNature = '-2';
                ctrl.character.characterSkillsReligion = '-2';

                break;
            case '8':
            case '9':
                ctrl.character.characterSkillsArcana = '-1';
                ctrl.character.characterSkillsHistory = '-1';
                ctrl.character.characterSkillsInvestigation = '-1';
                ctrl.character.characterSkillsNature = '-1';
                ctrl.character.characterSkillsReligion = '-1';

                break;
            case '10':
            case '11':
                ctrl.character.characterSkillsArcana = '0';
                ctrl.character.characterSkillsHistory = '0';
                ctrl.character.characterSkillsInvestigation = '0';
                ctrl.character.characterSkillsNature = '0';
                ctrl.character.characterSkillsReligion = '0';

                break;
            case '12':
            case '13':
                ctrl.character.characterSkillsArcana = '+1';
                ctrl.character.characterSkillsHistory = '+1';
                ctrl.character.characterSkillsInvestigation = '+1';
                ctrl.character.characterSkillsNature = '+1';
                ctrl.character.characterSkillsReligion = '+1';

                break;
            case '14':
            case '15':
                ctrl.character.characterSkillsArcana = '+2';
                ctrl.character.characterSkillsHistory = '+2';
                ctrl.character.characterSkillsInvestigation = '+2';
                ctrl.character.characterSkillsNature = '+2';
                ctrl.character.characterSkillsReligion = '+2';

                break;
            case '16':
            case '17':
                ctrl.character.characterSkillsArcana = '+3';
                ctrl.character.characterSkillsHistory = '+3';
                ctrl.character.characterSkillsInvestigation = '+3';
                ctrl.character.characterSkillsNature = '+3';
                ctrl.character.characterSkillsReligion = '+3';

                break;
            case '18':
            case '19':
                ctrl.character.characterSkillsArcana = '+4';
                ctrl.character.characterSkillsHistory = '+4';
                ctrl.character.characterSkillsInvestigation = '+4';
                ctrl.character.characterSkillsNature = '+4';
                ctrl.character.characterSkillsReligion = '+4';

                break;
            case '20':
            case '21':
                ctrl.character.characterSkillsArcana = '+5';
                ctrl.character.characterSkillsHistory = '+5';
                ctrl.character.characterSkillsInvestigation = '+5';
                ctrl.character.characterSkillsNature = '+5';
                ctrl.character.characterSkillsReligion = '+5';

                break;
            case '22':
            case '23':
                ctrl.character.characterSkillsArcana = '6';
                ctrl.character.characterSkillsHistory = '6';
                ctrl.character.characterSkillsInvestigation = '6';
                ctrl.character.characterSkillsNature = '6';
                ctrl.character.characterSkillsReligion = '6';

                break;
            case '24':
            case '25':
                ctrl.character.characterSkillsArcana = '7';
                ctrl.character.characterSkillsHistory = '7';
                ctrl.character.characterSkillsInvestigation = '7';
                ctrl.character.characterSkillsNature = '7';
                ctrl.character.characterSkillsReligion = '7';

                break;
            case '26':
            case '27':
                ctrl.character.characterSkillsArcana = '8';
                ctrl.character.characterSkillsHistory = '8';
                ctrl.character.characterSkillsNature = '8';
                ctrl.character.characterSkillsReligion = '8';
                ctrl.character.characterSkillsInvestigation = '8';
                break;
            case '28':
            case '29':
                ctrl.character.characterSkillsArcana = '9';
                ctrl.character.characterSkillsHistory = '9';
                ctrl.character.characterSkillsInvestigation = '9';
                ctrl.character.characterSkillsNature = '9';
                ctrl.character.characterSkillsReligion = '9';

                break;
            case '30':
            case '31':
                ctrl.character.characterSkillsArcana = '10';
                ctrl.character.characterSkillsHistory = '10';
                ctrl.character.characterSkillsInvestigation = '10';
                ctrl.character.characterSkillsNature = '10';
                ctrl.character.characterSkillsReligion = '10';

                break;
            case '32':
            case '33':
                ctrl.character.characterSkillsArcana = '11';
                ctrl.character.characterSkillsHistory = '11';
                ctrl.character.characterSkillsInvestigation = '11';
                ctrl.character.characterSkillsNature = '11';
                ctrl.character.characterSkillsReligion = '11';

                break;
            case '34':
            case '35':
                ctrl.character.characterSkillsArcana = '12';
                ctrl.character.characterSkillsHistory = '12';
                ctrl.character.characterSkillsInvestigation = '12';
                ctrl.character.characterSkillsNature = '12';
                ctrl.character.characterSkillsReligion = '12';

                break;
        };

        switch (ctrl.character.characterWis){
            case '1':
                ctrl.character.characterSkillsAnimalHandling = '-5';
                ctrl.character.characterSkillsInsight = '-5';
                ctrl.character.characterSkillsMedicine = '-5';
                ctrl.character.characterSkillsPerception = '-5';
                ctrl.character.characterSkillsSurvival = '-5';
                break;
            case '2':
            case '3':
                ctrl.character.characterSkillsAnimalHandling = '-4';
                ctrl.character.characterSkillsInsight = '-4';
                ctrl.character.characterSkillsMedicine = '-4';
                ctrl.character.characterSkillsPerception = '-4';
                ctrl.character.characterSkillsSurvival = '-4';

                break;
            case '4':
            case '5':
                ctrl.character.characterSkillsAnimalHandling = '-3';
                ctrl.character.characterSkillsInsight = '-3';
                ctrl.character.characterSkillsMedicine = '-3';
                ctrl.character.characterSkillsPerception = '-3';
                ctrl.character.characterSkillsSurvival = '-3';

                break;
            case '6':
            case '7':
                ctrl.character.characterSkillsAnimalHandling = '-2';
                ctrl.character.characterSkillsInsight = '-2';
                ctrl.character.characterSkillsMedicine = '-2';
                ctrl.character.characterSkillsPerception = '-2';
                ctrl.character.characterSkillsSurvival = '-2';

                break;
            case '8':
            case '9':
                ctrl.character.characterSkillsAnimalHandling = '-1';
                ctrl.character.characterSkillsInsight = '-1';
                ctrl.character.characterSkillsMedicine = '-1';
                ctrl.character.characterSkillsPerception = '-1';
                ctrl.character.characterSkillsSurvival = '-1';

                break;
            case '10':
            case '11':
                ctrl.character.characterSkillsAnimalHandling = '0';
                ctrl.character.characterSkillsInsight = '0';
                ctrl.character.characterSkillsMedicine = '0';
                ctrl.character.characterSkillsPerception = '0';
                ctrl.character.characterSkillsSurvival = '0';

                break;
            case '12':
            case '13':
                ctrl.character.characterSkillsAnimalHandling = '+1';
                ctrl.character.characterSkillsInsight = '+1';
                ctrl.character.characterSkillsMedicine = '+1';
                ctrl.character.characterSkillsPerception = '+1';
                ctrl.character.characterSkillsSurvival = '+1';

                break;
            case '14':
            case '15':
                ctrl.character.characterSkillsAnimalHandling = '+2';
                ctrl.character.characterSkillsInsight = '+2';
                ctrl.character.characterSkillsMedicine = '+2';
                ctrl.character.characterSkillsPerception = '+2';
                ctrl.character.characterSkillsSurvival = '+2';

                break;
            case '16':
            case '17':
                ctrl.character.characterSkillsAnimalHandling = '+3';
                ctrl.character.characterSkillsInsight = '+3';
                ctrl.character.characterSkillsMedicine = '+3';
                ctrl.character.characterSkillsPerception = '+3';
                ctrl.character.characterSkillsSurvival = '+3';

                break;
            case '18':
            case '19':
                ctrl.character.characterSkillsAnimalHandling = '+4';
                ctrl.character.characterSkillsInsight = '+4';
                ctrl.character.characterSkillsMedicine = '+4';
                ctrl.character.characterSkillsPerception = '+4';
                ctrl.character.characterSkillsSurvival = '+4';

                break;
            case '20':
            case '21':
                ctrl.character.characterSkillsAnimalHandling = '+5';
                ctrl.character.characterSkillsInsight = '+5';
                ctrl.character.characterSkillsMedicine = '+5';
                ctrl.character.characterSkillsPerception = '+5';
                ctrl.character.characterSkillsSurvival = '+5';

                break;
            case '22':
            case '23':
                ctrl.character.characterSkillsAnimalHandling = '6';
                ctrl.character.characterSkillsInsight = '6';
                ctrl.character.characterSkillsMedicine = '6';
                ctrl.character.characterSkillsPerception = '6';
                ctrl.character.characterSkillsSurvival = '6';

                break;
            case '24':
            case '25':
                ctrl.character.characterSkillsAnimalHandling = '7';
                ctrl.character.characterSkillsInsight = '7';
                ctrl.character.characterSkillsMedicine = '7';
                ctrl.character.characterSkillsPerception = '7';
                ctrl.character.characterSkillsSurvival = '7';

                break;
            case '26':
            case '27':
                ctrl.character.characterSkillsAnimalHandling = '8';
                ctrl.character.characterSkillsInsight = '8';
                ctrl.character.characterSkillsPerception = '8';
                ctrl.character.characterSkillsSurvival = '8';
                ctrl.character.characterSkillsMedicine = '8';
                break;
            case '28':
            case '29':
                ctrl.character.characterSkillsAnimalHandling = '9';
                ctrl.character.characterSkillsInsight = '9';
                ctrl.character.characterSkillsMedicine = '9';
                ctrl.character.characterSkillsPerception = '9';
                ctrl.character.characterSkillsSurvival = '9';

                break;
            case '30':
            case '31':
                ctrl.character.characterSkillsAnimalHandling = '10';
                ctrl.character.characterSkillsInsight = '10';
                ctrl.character.characterSkillsMedicine = '10';
                ctrl.character.characterSkillsPerception = '10';
                ctrl.character.characterSkillsSurvival = '10';

                break;
            case '32':
            case '33':
                ctrl.character.characterSkillsAnimalHandling = '11';
                ctrl.character.characterSkillsInsight = '11';
                ctrl.character.characterSkillsMedicine = '11';
                ctrl.character.characterSkillsPerception = '11';
                ctrl.character.characterSkillsSurvival = '11';

                break;
            case '34':
            case '35':
                ctrl.character.characterSkillsAnimalHandling = '12';
                ctrl.character.characterSkillsInsight = '12';
                ctrl.character.characterSkillsMedicine = '12';
                ctrl.character.characterSkillsPerception = '12';
                ctrl.character.characterSkillsSurvival = '12';

                break;
        };

        switch (ctrl.character.characterDex){
            case '1':
                ctrl.character.characterSkillsAcrobatics = '-5';
                ctrl.character.characterSkillsSleightOfHand = '-5';
                ctrl.character.characterSkillsStealth = '-5';
                break;
            case '2':
            case '3':
                ctrl.character.characterSkillsAcrobatics = '-4';
                ctrl.character.characterSkillsSleightOfHand = '-4';
                ctrl.character.characterSkillsStealth = '-4';
                break;
            case '4':
            case '5':
                ctrl.character.characterSkillsAcrobatics = '-3';
                ctrl.character.characterSkillsSleightOfHand = '-3';
                ctrl.character.characterSkillsStealth = '-3';
                break;
            case '6':
            case '7':
                ctrl.character.characterSkillsAcrobatics = '-2';
                ctrl.character.characterSkillsSleightOfHand = '-2';
                ctrl.character.characterSkillsStealth = '-2';
                break;
            case '8':
            case '9':
                ctrl.character.characterSkillsAcrobatics = '-1';
                ctrl.character.characterSkillsSleightOfHand = '-1';
                ctrl.character.characterSkillsStealth = '-1';
                break;
            case '10':
            case '11':
                ctrl.character.characterSkillsAcrobatics = '0';
                ctrl.character.characterSkillsSleightOfHand = '0';
                ctrl.character.characterSkillsStealth = '0';
                break;
            case '12':
            case '13':
                ctrl.character.characterSkillsAcrobatics = '+1';
                ctrl.character.characterSkillsSleightOfHand = '+1';
                ctrl.character.characterSkillsStealth = '+1';
                break;
            case '14':
            case '15':
                ctrl.character.characterSkillsAcrobatics = '+2';
                ctrl.character.characterSkillsSleightOfHand = '+2';
                ctrl.character.characterSkillsStealth = '+2';
                break;
            case '16':
            case '17':
                ctrl.character.characterSkillsAcrobatics = '+3';
                ctrl.character.characterSkillsSleightOfHand = '+3';
                ctrl.character.characterSkillsStealth = '+3';
                break;
            case '18':
            case '19':
                ctrl.character.characterSkillsAcrobatics = '+4';
                ctrl.character.characterSkillsSleightOfHand = '+4';
                ctrl.character.characterSkillsStealth = '+4';
                break;
            case '20':
            case '21':
                ctrl.character.characterSkillsAcrobatics = '+5';
                ctrl.character.characterSkillsSleightOfHand = '+5';
                ctrl.character.characterSkillsStealth = '+5';
                break;
            case '22':
            case '23':
                ctrl.character.characterSkillsAcrobatics = '6';
                ctrl.character.characterSkillsSleightOfHand = '6';
                ctrl.character.characterSkillsStealth = '6';
                break;
            case '24':
            case '25':
                ctrl.character.characterSkillsAcrobatics = '7';
                ctrl.character.characterSkillsSleightOfHand = '7';
                ctrl.character.characterSkillsStealth = '7';
                break;
            case '26':
            case '27':
                ctrl.character.characterSkillsAcrobatics = '8';
                ctrl.character.characterSkillsSleightOfHand = '8';
                ctrl.character.characterSkillsStealth = '8';
                break;
            case '28':
            case '29':
                ctrl.character.characterSkillsAcrobatics = '9';
                ctrl.character.characterSkillsSleightOfHand = '9';
                ctrl.character.characterSkillsStealth = '9';
                break;
            case '30':
            case '31':
                ctrl.character.characterSkillsAcrobatics = '10';
                ctrl.character.characterSkillsSleightOfHand = '10';
                ctrl.character.characterSkillsStealth = '10';
                break;
            case '32':
            case '33':
                ctrl.character.characterSkillsAcrobatics = '11';
                ctrl.character.characterSkillsSleightOfHand = '11';
                ctrl.character.characterSkillsStealth = '11';
                break;
            case '34':
            case '35':
                ctrl.character.characterSkillsAcrobatics = '12';
                ctrl.character.characterSkillsSleightOfHand = '12';
                ctrl.character.characterSkillsStealth = '12';
                break;
        };

        switch (ctrl.character.characterChar){
            case '1':
                ctrl.character.characterSkillsDeception = '-5';
                ctrl.character.characterSkillsIntimidation = '-5';
                ctrl.character.characterSkillsPerformance = '-5';
                ctrl.character.characterSkillsPersuasion = '-5';
                break;
            case '2':
            case '3':
                ctrl.character.characterSkillsDeception = '-4';
                ctrl.character.characterSkillsIntimidation = '-4';
                ctrl.character.characterSkillsPerformance = '-4';
                ctrl.character.characterSkillsPersuasion = '-4';
                break;
            case '4':
            case '5':
                ctrl.character.characterSkillsDeception = '-3';
                ctrl.character.characterSkillsIntimidation = '-3';
                ctrl.character.characterSkillsPerformance = '-3';
                ctrl.character.characterSkillsPersuasion = '-3';
                break;
            case '6':
            case '7':
                ctrl.character.characterSkillsDeception = '-2';
                ctrl.character.characterSkillsIntimidation = '-2';
                ctrl.character.characterSkillsPerformance = '-2';
                ctrl.character.characterSkillsPersuasion = '-2';
                break;
            case '8':
            case '9':
                ctrl.character.characterSkillsDeception = '-1';
                ctrl.character.characterSkillsIntimidation = '-1';
                ctrl.character.characterSkillsPerformance = '-1';
                ctrl.character.characterSkillsPersuasion = '-1';
                break;
            case '10':
            case '11':
                ctrl.character.characterSkillsDeception = '0';
                ctrl.character.characterSkillsIntimidation = '0';
                ctrl.character.characterSkillsPerformance = '0';
                ctrl.character.characterSkillsPersuasion = '0';
                break;
            case '12':
            case '13':
                ctrl.character.characterSkillsDeception = '+1';
                ctrl.character.characterSkillsIntimidation = '+1';
                ctrl.character.characterSkillsPerformance = '+1';
                ctrl.character.characterSkillsPersuasion = '+1';
                break;
            case '14':
            case '15':
                ctrl.character.characterSkillsDeception = '+2';
                ctrl.character.characterSkillsIntimidation = '+2';
                ctrl.character.characterSkillsPerformance = '+2';
                ctrl.character.characterSkillsPersuasion = '+2';
                break;
            case '16':
            case '17':
                ctrl.character.characterSkillsDeception = '+3';
                ctrl.character.characterSkillsIntimidation = '+3';
                ctrl.character.characterSkillsPerformance = '+3';
                ctrl.character.characterSkillsPersuasion = '+3';
                break;
            case '18':
            case '19':
                ctrl.character.characterSkillsDeception = '+4';
                ctrl.character.characterSkillsIntimidation = '+4';
                ctrl.character.characterSkillsPerformance = '+4';
                ctrl.character.characterSkillsPersuasion = '+4';
                break;
            case '20':
            case '21':
                ctrl.character.characterSkillsDeception = '+5';
                ctrl.character.characterSkillsIntimidation = '+5';
                ctrl.character.characterSkillsPerformance = '+5';
                ctrl.character.characterSkillsPersuasion = '+5';
                break;
            case '22':
            case '23':
                ctrl.character.characterSkillsDeception = '6';
                ctrl.character.characterSkillsIntimidation = '6';
                ctrl.character.characterSkillsPerformance = '6';
                ctrl.character.characterSkillsPersuasion = '6';
                break;
            case '24':
            case '25':
                ctrl.character.characterSkillsDeception = '7';
                ctrl.character.characterSkillsIntimidation = '7';
                ctrl.character.characterSkillsPerformance = '7';
                ctrl.character.characterSkillsPersuasion = '7';
                break;
            case '26':
            case '27':
                ctrl.character.characterSkillsDeception = '8';
                ctrl.character.characterSkillsIntimidation = '8';
                ctrl.character.characterSkillsPerformance = '8';
                ctrl.character.characterSkillsPersuasion = '8';
                break;
            case '28':
            case '29':
                ctrl.character.characterSkillsDeception = '9';
                ctrl.character.characterSkillsIntimidation = '9';
                ctrl.character.characterSkillsPerformance = '9';
                ctrl.character.characterSkillsPersuasion = '9';
                break;
            case '30':
            case '31':
                ctrl.character.characterSkillsDeception = '10';
                ctrl.character.characterSkillsIntimidation = '10';
                ctrl.character.characterSkillsPerformance = '10';
                ctrl.character.characterSkillsPersuasion = '10';
                break;
            case '32':
            case '33':
                ctrl.character.characterSkillsDeception = '11';
                ctrl.character.characterSkillsIntimidation = '11';
                ctrl.character.characterSkillsPerformance = '11';
                ctrl.character.characterSkillsPersuasion = '11';
                break;
            case '34':
            case '35':
                ctrl.character.characterSkillsDeception = '12';
                ctrl.character.characterSkillsIntimidation = '12';
                ctrl.character.characterSkillsPerformance = '12';
                ctrl.character.characterSkillsPersuasion = '12';
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


    ctrl.sheet = function() {
        console.log('logging in');
        $http.post('/charactersheet', ctrl.character
        ).then(function(response){
            $location.path('/home');
        }, function(error) {
            console.log('error workin', error);
        });
    };
}
