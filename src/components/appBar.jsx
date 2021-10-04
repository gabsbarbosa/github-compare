import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import ClayDropDown, { ClayDropDownWithItems } from "@clayui/drop-down";
import { ClayCheckbox, ClayInput } from "@clayui/form";
import ClayIcon from "@clayui/icon";
import ClayLabel from "@clayui/label";
import ClayManagementToolbar, {
  ClayResultsBar,
} from "@clayui/management-toolbar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "@clayui/css/lib/css/atlas.css";
import ClayForm from "@clayui/form";
import ClayPanel from "@clayui/panel";
import ClayCard from "@clayui/card";
import active from "react";
import ClayModal, { useModal } from "@clayui/modal";

function AppBar(/*layoutStyle, setLayoutStyle*/) {

  const filterItems = [
    { label: <strong>ORDEM BY</strong>, onclick: () => window.close },
    { label: "Stars", onClick: () => alert("Filter clicked") },
    { label: "Forks", onClick: () => alert("Filter clicked") },
    { label: "Open Issues", onClick: () => alert("Filter clicked") },
    { label: "Age", onClick: () => alert("Filter clicked") },
    { label: "Last Commit", onClick: () => alert("Filter clicked") },
  ];

  const viewTypes = [
    {
      label: "List",
      onClick: () => {
        /*setLayoutStyle()*/
      },
      symbolLeft: "list",
    },
    {
      active: true,
      label: "Card",
      onClick: () => {
        /*setLayoutStyle()*/
      },
      symbolLeft: "cards2",
    },
  ];

  var favTypes = [
    {
      active: true,
      label: "Star Empty",
      onClick: () => alert("Show star empty"),
      symbolLeft: "star-o",
    },
    {
      active: false,
      label: "Star Full",
      onClick: () => alert("Show star full"),
      symbolLeft: "star",
    },
  ];

  var btnActive;

  const [searchMobile, setSearchMobile] = useState(false);

  const viewTypeActive = viewTypes.find((type) => type.active);
  const [status, setStatus] = useState(false);

  var statusBttn = Boolean(false);
  console.log("1" + statusBttn);
  if (statusBttn) {
    btnActive = favTypes.find((type) => type.active === false);
  } else {
    btnActive = favTypes.find((type) => type.active);
  }

  return (
    <>
      <ClayManagementToolbar>
        <ClayManagementToolbar.ItemList>
          <ClayManagementToolbar.Item>
            <ClayIcon
              symbol="github"
              className="position: absolute; left: 0%; right: 0%; top: 0%; bottom: 2.47%;  background: #6B6C7E;"
            />
            <ClayResultsBar.Item>
              <a href="./index.js">
                <ClayButton
                  // onClick={handleClick}
                  className="component-link tbar-link"
                  displayType="unstyled"
                >
                  {"Github Compare"}
                </ClayButton>
              </a>
            </ClayResultsBar.Item>
          </ClayManagementToolbar.Item>

          <ClayDropDownWithItems
            items={filterItems}
            trigger={
              <ClayButton className="nav-link" displayType="unstyled">
                <span className="navbar-breakpoint-down-d-none">
                  <span className="navbar-text-truncate">
                    {"Filter and Order"}
                  </span>

                  <ClayIcon
                    className="inline-item inline-item-after"
                    symbol="caret-bottom"
                  />
                </span>
                <span className="navbar-breakpoint-d-none">
                  <ClayIcon symbol="filter" />
                </span>
              </ClayButton>
            }
          >
            <ClayDropDown.Group header="Group #1"></ClayDropDown.Group>
          </ClayDropDownWithItems>
        </ClayManagementToolbar.ItemList>

        <ClayManagementToolbar.Search showMobile={searchMobile}>
          <ClayInput.Group>
            <ClayInput.GroupItem>
              <ClayInput
                aria-label="Search"
                className="form-control input-group-inset input-group-inset-after"
                defaultValue="Search"
                type="text"
              />
              <ClayInput.GroupInsetItem after tag="span">
                <ClayButtonWithIcon
                  className="navbar-breakpoint-d-none"
                  displayType="unstyled"
                  
                  symbol="times"
                />
                <ClayButtonWithIcon
                  displayType="unstyled"
                  onClick={() => setSearchMobile(true)}
                  symbol="search"
                  type="submit"
                />
              </ClayInput.GroupInsetItem>
            </ClayInput.GroupItem>
          </ClayInput.Group>
        </ClayManagementToolbar.Search>

        <ClayManagementToolbar.ItemList>
          <ClayManagementToolbar.Item className="navbar-breakpoint-d-none">
            <ClayButtonWithIcon
              className="nav-link nav-link-monospaced"
              displayType="unstyled"
              onClick={() => {}}
              symbol="search"
            />
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayButtonWithIcon
              className="nav-link nav-link-monospaced"
              displayType="unstyled"
              onClick={() => setStatus(!status)}
              symbol={status ? "star" : "star-o"}
            />
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayButtonWithIcon
              className="nav-link nav-link-monospaced"
              displayType="unstyled"
              onClick={() => []}
              symbol={"adjust"}
            />
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayDropDownWithItems
              items={viewTypes}
              trigger={
                <ClayButton
                  className="nav-link-monospaced nav-link"
                  displayType="unstyled"
                >
                  <ClayIcon
                    symbol={viewTypeActive ? viewTypeActive.symbolLeft : ""}
                  />
                </ClayButton>
              }
            />
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayButtonWithIcon
              onClick={() => []}
              className="nav-btn nav-btn-monospaced"
              symbol="plus"
            ></ClayButtonWithIcon>
          </ClayManagementToolbar.Item>
        </ClayManagementToolbar.ItemList>
      </ClayManagementToolbar>

      {searchMobile && (
        <ClayResultsBar>
          <ClayResultsBar.Item>
            <span className="component-text text-truncate-inline">
              <span className="text-truncate">
                {'2 results for "'}
                <strong>{"Red"}</strong>
                {'"'}
              </span>
            </span>
          </ClayResultsBar.Item>
          <ClayResultsBar.Item expand>
            <ClayLabel
              className="component-label tbar-label"
              displayType="unstyled"
            >
              {"Filter"}
            </ClayLabel>
          </ClayResultsBar.Item>
          <ClayResultsBar.Item>
            <ClayButton
              className="component-link tbar-link"
              displayType="unstyled"
            >
              {"Clear"}
            </ClayButton>
          </ClayResultsBar.Item>
        </ClayResultsBar>
      )}
    </>
  );
}

export default AppBar;
