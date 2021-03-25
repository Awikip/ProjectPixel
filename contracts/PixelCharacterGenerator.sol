pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "openzeppelin-solidity/contracts/utils/Strings.sol";

contract PixelCharacterGenerator is ERC721URIStorage, Ownable {
    using Strings for string;

    
        struct Character {
        uint256 attack;
        uint256 specialattack;
        uint256 defense;
        uint256 specialdefense;
        uint256 speed;
        uint256 hitpoints;
        uint256 specialpoints;
        uint256 experience;
        string class;
        string name;
    }
    
    Character[] public characters;

    mapping(bytes32 => string) requestToCharacterName;
    mapping(bytes32 => address) requestToSender;
    mapping(bytes32 => uint256) requestToTokenId;

    constructor()
        ERC721("PixelCharacter", "PXL")
    {   
    }

    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        return tokenURI(tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(tokenId, _tokenURI);
    }

    function createNewCharacter(bytes32 requestId, uint256 _attack, uint256 _specialattack, uint256 _defense, uint256 _specialdefense, uint256 _speed, uint256 _hitpoints, uint256 _specialpoints, string memory _class)
        internal
    {
        
        uint256 newId = characters.length;
        uint256 attack = _attack;
        uint256 specialattack = _specialattack;
        uint256 defense = _defense;
        uint256 specialdefense = _specialdefense;
        uint256 speed = _speed;
        uint256 hitpoints = _hitpoints;
        uint256 specialpoints = _specialpoints;
        uint256 experience = 0;
        string memory class = _class;

        characters.push(
            Character(
                attack,
                specialattack,
                defense,
                specialdefense,
                speed,
                hitpoints,
                specialpoints,
                experience,
                class,
                requestToCharacterName[requestId]
            )
        );
        _safeMint(requestToSender[requestId], newId);
    }

    function getLevel(uint256 tokenId) public view returns (uint256) {
        return sqrt(characters[tokenId].experience);
    }

    function getNumberOfCharacters() public view returns (uint256) {
        return characters.length; 
    }

    function getCharacterOverView(uint256 tokenId)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            characters[tokenId].name,
            characters[tokenId].class,
            characters[tokenId].attack + characters[tokenId].specialattack + characters[tokenId].defense + characters[tokenId].specialdefense + characters[tokenId].speed + characters[tokenId].hitpoints + characters[tokenId].specialpoints,
            getLevel(tokenId),
            characters[tokenId].experience
        );
    }

    function getCharacterStats(uint256 tokenId)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        Character memory c = characters[tokenId];
        return (
            c.attack,
            c.specialattack,
            c.defense,
            c.specialdefense,
            c.speed,
            c.hitpoints,
            c.specialpoints,
            c.experience
        );
    }

    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }
}