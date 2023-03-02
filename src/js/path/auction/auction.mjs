import { get } from "../../api/apiCalls/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../globals/params.mjs";
import { renderAuction } from "../../render/auction.mjs";
import { hideButtons } from "../../auth/hideButtons.mjs";
import { updateModal } from "../../render/updateModal.mjs";

export async function auction() {
  const id = getParams("id");
  const auction = await get(
    `${baseUrl}/auction/listings/${id}?_seller=true&_bids=true`
  );

  renderAuction(auction);
  hideButtons(auction);
  updateModal(auction);
}
