const Migrations = artifacts.require("Migrations");
const PixelCharacterGenerator = artifacts.require("PixelCharacterGenerator");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(PixelCharacterGenerator);
};
