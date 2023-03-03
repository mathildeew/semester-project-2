import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../func/params.mjs";
import { renderAuction } from "../../render/renderAuction.mjs";
import { hideButtons } from "../../auth/hideButtons.mjs";
import { updateModal } from "../../render/updateModal.mjs";
import { placeBidListener } from "../../listeners/placeBid.mjs";
import { updateAuctionListener } from "../../listeners/updateAuction.mjs";
import { deleteAuction } from "../../listeners/deleteAuction.mjs";
import { getAll } from "../../api/apiCalls/auctions/get.mjs";

export async function auction() {
  const id = getParams("id");
  const auction = await getAll(
    `${baseUrl}/auction/listings/${id}?_seller=true&_bids=true`
  );

  renderAuction(auction);
  hideButtons(auction);
  updateModal(auction);
  placeBidListener();
  updateAuctionListener();
  deleteAuction();
}
