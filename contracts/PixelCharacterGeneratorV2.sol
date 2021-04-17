pragma solidity ^0.7.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Burnable.sol";
import "openzeppelin-solidity/contracts/access/AccessControl.sol";
import "openzeppelin-solidity/contracts/utils/Strings.sol";
import "openzeppelin-solidity/contracts/utils/Counters.sol";


contract PixelCharacterGeneratorV2 is ERC721Burnable, AccessControl {
    using Strings for string;
    using Counters for Counters.Counter;

    
        struct Character {
        address owner;
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
    
    Counters.Counter private charIds;
    mapping(uint256 => Character) charRecords;
    mapping(uint256 => address) idToAddress;


    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");


    modifier onlyMinter {
        require(hasRole(MINTER_ROLE, msg.sender), "Not minter");
        _;
    }
    modifier onlyAdmin {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Not admin");
        _;
    }

    constructor()
        ERC721("PixelCharacter", "PXC")
    {   
            // Give caller admin permissions
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

    // Make the caller admin a minter
    grantRole(MINTER_ROLE, msg.sender);
    }

    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        return tokenURI(tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public onlyMinter {
        _setTokenURI(tokenId, _tokenURI);
    }

    function RequestNewCharacter(string memory name, uint256 _attack, uint256 _specialattack, uint256 _defense, uint256 _specialdefense, uint256 _speed, uint256 _hitpoints, uint256 _specialpoints, string memory _class)
    public returns (uint256)
    {
        uint256 currId = charIds.current();
        charIds.increment();


        
        charRecords[currId] = Character(
                 msg.sender,
                _attack,
                _specialattack,
                _defense,
                _specialdefense,
                _speed,
                _hitpoints,
                _specialpoints,
                0,
                _class,
                name
            );
        _safeMint(msg.sender, currId);
        return(currId);
    }

    function getLevel(uint256 tokenId) public view returns (uint256) {
        return sqrt(charRecords[tokenId].experience);
    }

    function getNumberOfCharacters() public view returns (uint256) {
        return charIds.current(); 
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
            charRecords[tokenId].name,
            charRecords[tokenId].class,
            charRecords[tokenId].attack + charRecords[tokenId].specialattack + charRecords[tokenId].defense + charRecords[tokenId].specialdefense + charRecords[tokenId].speed + charRecords[tokenId].hitpoints + charRecords[tokenId].specialpoints,
            getLevel(tokenId),
            charRecords[tokenId].experience
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
        Character memory c = charRecords[tokenId];
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