const Migrations = artifacts.require("Migrations");
const PixelCharacterGeneratorV2 = artifacts.require("PixelCharacterGeneratorV2");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(PixelCharacterGeneratorV2);
};
