import React from "react";
import { observer, inject } from 'mobx-react';
import styled from "styled-components";

const ProjectsPanel = ({ store }) => {
  const activeIndex = store.NavbarIndex
  return (
    <div>
      {/* Display the selected content based on the activeIndex */}
      {activeIndex === 0 && <div>Content for Section 0</div>}
      {activeIndex === 1 && <div>Content for Section 1</div>}
      {activeIndex === 2 && <div>Content for Section 2</div>}
      {activeIndex === 3 && <div>Content for Section 3</div>}
      {activeIndex === 4 && <div>Content for Section 4</div>}
      <div>{activeIndex}</div>
    </div>
  );
};

export default inject('store')(observer(ProjectsPanel));
