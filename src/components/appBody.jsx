import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import { ClayDropDownWithItems } from "@clayui/drop-down";
import { ClayCheckbox, ClayInput } from "@clayui/form";
import ClayIcon from "@clayui/icon";
import ClayLabel from "@clayui/label";
import ClayManagementToolbar, {
  ClayResultsBar,
} from "@clayui/management-toolbar";
import React, { useState } from "react";
import "@clayui/css/lib/css/atlas.css";
import ClayForm from "@clayui/form";
import ClayPanel from "@clayui/panel";
import ClayCard from "@clayui/card";
import ClayTable from "@clayui/table";
import ClaySticker from "@clayui/sticker";
import ClayModal, { useModal } from "@clayui/modal";
import ClayList from "@clayui/list";


function AppBody(layoutStyle, setLayoutStyle) {
  function isEmpty() {
    document.getElementById("card").style.visibility = "visible";
    document.getElementById("list").style.visibility = "hidden";
  }

  const [empty, setEmpty] = useState(false);
  const [listRep, setListRep] = useState([
    {
      nameRep: "Repositorio 1",
      starCount: "500",
    },
    {
      nameRep: "Repositorio 2",
      starCount: "100",
    },
  ]);

  return (
    <body className="body">
      <br></br>

      <div id="list" className="col-auto">
        <ClayList showQuickActionsOnHover>
          {listRep.length == 0 && (
            <>
  
            </>
          )}
          {listRep.map(({ nameRep, starCount }, index) => (
            <ClayList.Item flex
              key={index}
              value={nameRep}
              //onChange={(event) => updateTask(event, index)}
              //onDelete={() => deleteTask(index)}
              >
              <ClayList.ItemField expand listStyle>
                <ClayList.ItemTitle>
                  <ClayIcon symbol={"liferay"} /> Project Name
                </ClayList.ItemTitle>
                <ClayList.ItemText>
                  Stars | Forks | Open | Issues | Age | Last Commit | License
                </ClayList.ItemText>
                <section>
                  <ClayLabel displayType="danger">{"JAVA"}</ClayLabel>
                </section>
              </ClayList.ItemField>
              <ClayList.ItemField>
                <ClayList.QuickActionMenu>
                  <ClayList.QuickActionMenu.Item
                    onClick={() => alert("Clicked the favorite!")}
                    symbol={"star-o"}
                  />
                  <ClayList.QuickActionMenu.Item
                    onClick={() => alert("Clicked the trash!")}
                    symbol={"trash"}
                  />
                </ClayList.QuickActionMenu>
              </ClayList.ItemField>
            </ClayList.Item>

          ))}
        </ClayList>
      </div>
      
      <div id="card" className="col-auto">
      {listRep.length == 0 && (   
         <>           
       <div class="c-empty-state c-empty-state-animation">
                <div class="c-empty-state-image">
                  <div class="c-empty-state-aspect-ratio">
                    <img
                      alt="Image of a satellite in space"
                      class="aspect-ratio-item aspect-ratio-item-fluid"
                      src="empty-state.png"
                    />
                  </div>
                </div>
                <div class="c-empty-state-title">
                  <span class="text-truncate-inline">
                    <span class="text-truncate">No page templates yet</span>
                  </span>
                </div>
                <div class="c-empty-state-text">
                  Page Templates allow you to create pages faster with reusable
                  elements.
                </div>
              </div></>)}</div>
      {listRep.map(({ nameRep, starCount }, index) => (
      <> 
      <ClayCard className="col-md-4">
          <ClayCard.Body>
            <ClayCard.Row>
              <ClayTable.Cell
                headingCell
                className="cardDivSpace"
                className="nav-link nav-link-monospaced"
              >
                <ClayIcon symbol={"liferay"} />
              </ClayTable.Cell>
              <ClayTable.Cell headingCell className="cardDivSpace">
                <ClayCard.Description
                  className="nav-link nav-link-monospaced"
                  displayType=""
                >
                  <strong>{"Project Name"}</strong>
                </ClayCard.Description>
              </ClayTable.Cell>

              <ClayTable.Cell
                headingCell
                className="cardDivSpace"
              ></ClayTable.Cell>

              <ClayTable.Cell headingCell className="cardDivSpace">
                <ClayButtonWithIcon
                  className="nav-link nav-link-monospaced"
                  displayType="unstyled"
                  symbol={"star-o"}
                />
              </ClayTable.Cell>
              <ClayTable.Cell headingCell className="cardDivSpace">
                <ClayButtonWithIcon
                  className="nav-link nav-link-monospaced"
                  displayType="unstyled"
                  symbol={"trash"}
                />
              </ClayTable.Cell>
            </ClayCard.Row>
          </ClayCard.Body>
          <ClayCard.Body>
            <div>
              <section>
                <ClayCard.Description displayType="title">
                  {"Stars"}
                </ClayCard.Description>
                <ClayCard.Description displayType="title">
                  {"Forks"}
                </ClayCard.Description>
                <ClayCard.Description displayType="title">
                  {"Open Issues"}
                </ClayCard.Description>
                <ClayCard.Description displayType="title">
                  {"Age"}
                </ClayCard.Description>
                <ClayCard.Description displayType="title">
                  {"Last commit"}
                </ClayCard.Description>
                <ClayCard.Description displayType="title">
                  {"License"}
                </ClayCard.Description>
                <ClayLabel displayType="danger">{"JAVA"}</ClayLabel>
              </section>
            </div>
            
          </ClayCard.Body>
        </ClayCard>
        </>))}
 
    </body>
  );
}
export default AppBody;
