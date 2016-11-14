angular.module('dndApp')
       .controller('SheetController', SheetController);

function SheetController($http, $location) {
    console.log('SheetController loaded');
    var ctrl = this;

    ctrl.setSkillBonuses = function(){

        function skills(chartype) {
            return parseInt(chartype/2) - 5;
        }



        var strskills = skills(ctrl.character.characterStr);
        var dexskills = skills(ctrl.character.characterDex);
        var wisskills = skills(ctrl.character.characterWis);
        var intskills = skills(ctrl.character.characterInt);
        var charskills = skills(ctrl.character.characterChar);
        var constskills = skills(ctrl.character.characterConst);

        ctrl.character.characterSkillsAnimalHandling = wisskills;
        ctrl.character.characterSkillsInsight = wisskills;
        ctrl.character.characterSkillsMedicine = wisskills;
        ctrl.character.characterSkillsPerception = wisskills;
        ctrl.character.characterSkillsSurvival = wisskills;

        ctrl.character.characterSkillsHistory = intskills;
        ctrl.character.characterSkillsInvestigation = intskills;
        ctrl.character.characterSkillsNature = intskills;
        ctrl.character.characterSkillsReligion = intskills;
        ctrl.character.characterSkillsArcana = intskills;

        ctrl.character.characterSkillsAthletics = strskills;

        ctrl.character.characterSkillsAcrobatics = dexskills;
        ctrl.character.characterSkillsSleightOfHand = dexskills;
        ctrl.character.characterSkillsStealth = dexskills;
        ctrl.character.characterInit = dexskills;

        ctrl.character.characterSkillsDeception = charskills;
        ctrl.character.characterSkillsIntimidation = charskills;
        ctrl.character.characterSkillsPerformance = charskills;
        ctrl.character.characterSkillsPersuasion = charskills;


        function colorTheStrength(color){
            document.getElementsByName('charSkillsStr')[0].style.backgroundColor=color;
        }
        function colorTheIntelligence(color){
            document.getElementsByName('charSkillsInt')[0].style.backgroundColor=color;
            document.getElementsByName('charSkillsInt')[1].style.backgroundColor=color;
            document.getElementsByName('charSkillsInt')[2].style.backgroundColor=color;
            document.getElementsByName('charSkillsInt')[3].style.backgroundColor=color;
            document.getElementsByName('charSkillsInt')[4].style.backgroundColor=color;
        }
        function colorTheWisdom(color){
            document.getElementsByName('charSkillsWis')[0].style.backgroundColor=color;
            document.getElementsByName('charSkillsWis')[1].style.backgroundColor=color;
            document.getElementsByName('charSkillsWis')[2].style.backgroundColor=color;
            document.getElementsByName('charSkillsWis')[3].style.backgroundColor=color;
            document.getElementsByName('charSkillsWis')[4].style.backgroundColor=color;
        }
        function colorTheDexterity(color){
            document.getElementsByName('charSkillsDex')[0].style.backgroundColor=color;
            document.getElementsByName('charSkillsDex')[1].style.backgroundColor=color;
            document.getElementsByName('charSkillsDex')[2].style.backgroundColor=color;
            document.getElementsByName('charSkillsDex')[3].style.backgroundColor=color;
        }
        function colorTheCharisma(color){
            document.getElementsByName('charSkillsChar')[0].style.backgroundColor=color;
            document.getElementsByName('charSkillsChar')[1].style.backgroundColor=color;
            document.getElementsByName('charSkillsChar')[2].style.backgroundColor=color;
            document.getElementsByName('charSkillsChar')[3].style.backgroundColor=color;
        }

        var colors = [
            'IndianRed',
            '#cf6363',
            '#db8a8a',
            '#e19d9d',
            '#edc4c4',
            '#EEEEEE',
            '#80ffaa',
            '#1aff66',
            '#00cc44',
            '#009933',
            '#00802b',
            '#00802b',
            '#00802b',
            '#00802b',
            '#00802b',
            '#00802b',
            '#00802b',
            '#00802b'
        ];

        function getBGColor(attribute){
            return colors[parseInt(attribute/2)];
        }

        colorTheWisdom(getBGColor(ctrl.character.characterWis));
        colorTheStrength(getBGColor(ctrl.character.characterStr));
        colorTheCharisma(getBGColor(ctrl.character.characterChar));
        colorTheDexterity(getBGColor(ctrl.character.characterDex));
        colorTheIntelligence(getBGColor(ctrl.character.characterInt));

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
