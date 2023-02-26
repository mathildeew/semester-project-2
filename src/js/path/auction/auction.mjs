import { get } from "../../api/apiCalls/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../globals/params.mjs";
import { displayAuction } from "./display.mjs";
import { hideButtons } from "./auth/auth.mjs";
import { updateModal } from "./updateModal.mjs";

export async function auction() {
  const id = getParams("id");
  const auction = await get(
    `${baseUrl}/auction/listings/${id}?_seller=true&_bids=true`
  );

  displayAuction(auction);
  hideButtons(auction);
  updateModal(auction);
}
