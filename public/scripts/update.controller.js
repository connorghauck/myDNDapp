angular.module('dndApp')
       .controller('UpdateController', UpdateController);

function UpdateController($http, $location, CharacterService) {
    console.log('UpdateController loaded');

    var ctrl = this;

    ctrl.setSkillBonuses = function(){


        function skills(chartype) {
            return parseInt(chartype/2) - 5;
        }



        var strskills = skills(ctrl.selectedId.strength);
        var dexskills = skills(ctrl.selectedId.dexterity);
        var wisskills = skills(ctrl.selectedId.wisdom);
        var intskills = skills(ctrl.selectedId.intelligence);
        var charskills = skills(ctrl.selectedId.charisma);
        var constskills = skills(ctrl.selectedId.constitution);

        ctrl.selectedId.animalhandlingskill = wisskills;
        ctrl.selectedId.insightskill = wisskills;
        ctrl.selectedId.medicineskill = wisskills;
        ctrl.selectedId.perceptionskill = wisskills;
        ctrl.selectedId.survivalskill = wisskills;

        ctrl.selectedId.historyskill = intskills;
        ctrl.selectedId.investigationskill = intskills;
        ctrl.selectedId.natureskill = intskills;
        ctrl.selectedId.religionskill = intskills;
        ctrl.selectedId.arcanaskill = intskills;

        ctrl.selectedId.athleticsskill = strskills;

        ctrl.selectedId.acrobaticsskill = dexskills;
        ctrl.selectedId.sleightofhandskill = dexskills;
        ctrl.selectedId.stealthskill = dexskills;
        ctrl.selectedId.characterInit = dexskills;

        ctrl.selectedId.deceptionskill = charskills;
        ctrl.selectedId.intimidationskill = charskills;
        ctrl.selectedId.performanceskill = charskills;
        ctrl.selectedId.persuasionskill = charskills;

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

        colorTheWisdom(getBGColor(ctrl.selectedId.wisdom));
        colorTheStrength(getBGColor(ctrl.selectedId.strength));
        colorTheCharisma(getBGColor(ctrl.selectedId.charisma));
        colorTheDexterity(getBGColor(ctrl.selectedId.dexterity));
        colorTheIntelligence(getBGColor(ctrl.selectedId.intelligence));

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

    ctrl.setSkillBonuses();
}
