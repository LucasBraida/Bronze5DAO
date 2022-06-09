import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xE5921eeC763640A5B84cf077C66ff775a8658b3a");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Bronze5 Badge",
        description: "This NFT will give you access to Bronze5DAO!",
        image: readFileSync("scripts/assets/b5dao.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
