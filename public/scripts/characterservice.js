angular.module('dndApp').service('CharacterService', CharacterService);

function CharacterService(){
    this.currentlySelectedCharacter = null;
}
