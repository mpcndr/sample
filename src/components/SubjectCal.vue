<template>
  <div>
    <div id="mySubcal" style="width: 100vw; height: 91.5vh"></div>
  </div>
</template>

<script>
import go from "gojs";
export default {
  name: "subject_cal",
  props: {},
  data() {
    return {
      status: 2,
      nodeSubject: [
        { key: 1, isGroup: true, text: "ปีการศึกษาปีที่ 1", horiz: true },
        { key: 2, isGroup: true, text: "ปีการศึกษาปีที่ 2", horiz: true },
        { key: 3, isGroup: true, text: "ปีการศึกษาปีที่ 3", horiz: true },
        { key: 4, isGroup: true, text: "ปีการศึกษาปีที่ 4", horiz: true },
        { key: 5, isGroup: true, text: "ปีการศึกษาปีที่ 5", horiz: true },
        { key: 6, isGroup: true, text: "ปีการศึกษาปีที่ 6", horiz: true },
        { key: 7, isGroup: true, text: "ปีการศึกษาปีที่ 7", horiz: true },
        { key: 8, isGroup: true, text: "ปีการศึกษาปีที่ 8", horiz: true },
        { key: 11, isGroup: true, text: "เทอม1", group: 1 },
        { key: 12, isGroup: true, text: "เทอม2", group: 1 },
        { key: 21, isGroup: true, text: "เทอม1", group: 2 },
        { key: 22, isGroup: true, text: "เทอม2", group: 2 },
        { key: 31, isGroup: true, text: "เทอม1", group: 3 },
        { key: 32, isGroup: true, text: "เทอม2", group: 3 },
        { key: 41, isGroup: true, text: "เทอม1", group: 4 },
        { key: 42, isGroup: true, text: "เทอม2", group: 4 },
        { key: 43, isGroup: true, text: "เทอม3", group: 4 },
        { key: 51, isGroup: true, text: "เทอม1", group: 5 },
        { key: 52, isGroup: true, text: "เทอม2", group: 5 },
        { key: 61, isGroup: true, text: "เทอม1", group: 6 },
        { key: 62, isGroup: true, text: "เทอม2", group: 6 },
        { key: 71, isGroup: true, text: "เทอม1", group: 7 },
        { key: 72, isGroup: true, text: "เทอม2", group: 7 },
        { key: 81, isGroup: true, text: "เทอม1", group: 8 },
        { key: 82, isGroup: true, text: "เทอม2", group: 8 },
        { key: 83, isGroup: true, text: "เทอม3", group: 8 },

        { text: "511100 precalculus", group: 11, check: 1 },
        { text: "511108 calculus 1", group: 11, check: -1 },
        { text: "081102 english", group: 11, check: 1 },
        { text: "471302 health edu", group: 11, check: 1 },
        { text: "514107 fun physics", group: 11, check: 1 },
        { text: "517121 com 1", group: 11, check: -1 },
        { text: "520101 foundation of com", group: 11, check: 1 },

        { text: "081103 english", group: 12, check: 1 },
        { text: "083104 sport edu", group: 12, check: 1 },
        { text: "084108 earth&astronomy", group: 12, check: 1 },
        { text: "085101 creative su", group: 12, check: 1 },
        { text: "515201 elementary statistics", group: 12, check: 1 },

        { text: "517121 com 1", group: 21, check: 0 },
        { text: "511108 cal 1", group: 21, check: 0 },
        { text: "510201 english for science", group: 21, check: 0 },
        { text: "517212 digital logic design", group: 21, check: 0 },

        { text: "510202 communicative eng", group: 22, check: 0 },
        { text: "517122 com 2", group: 22, check: 0 },
        { text: "517222 com organization&architecture", group: 22, check: 0 },
        { text: "511109 cal 2", group: 22, check: 0 },
        { text: "511242 linear", group: 22, check: 0 },

        { text: "081101 thai for communication", group: 31, check: 0 },
        { text: "517213 discrete", group: 31, check: 0 },
        { text: "517211 data structure", group: 31, check: 0 },
        { text: "517312 operating systems", group: 31, check: 0 },
        { text: "520212 laws&ethics", group: 31, check: 0 },
        { text: "520215 big data", group: 31, check: 0 },

        { text: "520221 data base", group: 32, check: 0 },
        { text: "517221 OOSD", group: 32, check: 0 },
        { text: "517313 theory", group: 32, check: 0 },
        { text: "517391 RM", group: 32, check: 0 },
        { text: "520351 HCI", group: 32, check: 0 },

        { text: "517311 Algorithm", group: 41, check: 0 },
        { text: "517321 PL", group: 41, check: 0 },
        { text: "520361 system analysis and design", group: 41, check: 0 },
        { text: "515232 probability", group: 41, check: 0 },

        { text: "516190 Household", group: 42, check: 0 },
        { text: "517493 research project 1", group: 42, check: 0 },
        { text: "520362 SE", group: 42, check: 0 },

        {
          text: "517494 research project 2",
          group: 43,
          check: 0,
        },

        { text: "511100 precalculus", group: 51, check: 0 },
        { text: "511108 calculus 1", group: 51, check: 0 },
        { text: "081102 english", group: 51, check: 0 },
        { text: "471302 health edu", group: 51, check: 0 },
        { text: "514107 fun physics", group: 51, check: 0 },
        { text: "517121 com 1", group: 51, check: 0 },
        { text: "520101 foundation of com", group: 51, check: 0 },

        { text: "081103 english", group: 52, check: 0 },
        { text: "083104 sport edu", group: 52, check: 0 },
        { text: "084108 earth&astronomy", group: 52, check: 0 },
        { text: "085101 creative su", group: 52, check: 0 },
        { text: "515201 elementary statistics", group: 52, check: 0 },

        { text: "517121 com 1", group: 61, check: 0 },
        { text: "511108 cal 1", group: 61, check: 0 },
        { text: "510201 english for science", group: 61, check: 0 },
        { text: "517212 digital logic design", group: 61, check: 0 },

        { text: "510202 communicative eng", group: 62, check: 0 },
        { text: "517122 com 2", group: 62, check: 0 },
        { text: "517222 com organization&architecture", group: 22, check: 0 },
        { text: "511109 cal 2", group: 62, check: 0 },
        { text: "511242 linear", group: 62, check: 0 },

        { text: "081101 thai for communication", group: 71, check: 0 },
        { text: "517213 discrete", group: 71, check: 0 },
        { text: "517211 data structure", group: 71, check: 0 },
        { text: "517312 operating systems", group: 71, check: 0 },
        { text: "520212 laws&ethics", group: 71, check: 0 },
        { text: "520215 big data", group: 71, check: 0 },

        { text: "520221 data base", group: 72, check: 0 },
        { text: "517221 OOSD", group: 72, check: 0 },
        { text: "517313 theory", group: 72, check: 0 },
        { text: "517391 RM", group: 72, check: 0 },
        { text: "520351 HCI", group: 72, check: 0 },

        { text: "517311 Algorithm", group: 81, check: 0 },
        { text: "517321 PL", group: 81, check: 0 },
        { text: "520361 system analysis and design", group: 41, check: 0 },
        { text: "515232 probability", group: 81, check: 0 },

        { text: "516190 Household", group: 82, check: 0 },
        { text: "517493 research project 1", group: 82, check: 0 },
        { text: "520362 SE", group: 82, check: 0 },

        {
          text: "517494 research project 2",
          group: 83,
          check: 0,
        },
      ],
      subjects: [],
    };
  },
  methods: {
    Diagram: function() {
      var $ = go.GraphObject.make;
      var myDiagram = $(go.Diagram, "mySubcal", {
        // when a drag-drop occurs in the Diagram's background, make it a top-level node
        // Diagram has simple horizontal layout
        layout: $(go.GridLayout, {
          wrappingWidth: Infinity,
          alignment: go.GridLayout.Position,
          cellSize: new go.Size(1, 1),
        }),
        "commandHandler.archetypeGroupData": {
          isGroup: true,
          text: "Group",
          horiz: false,
        },
        "undoManager.isEnabled": true,
        // "SubGraphExpanded": function(e) {
        //   var groups = e.subject;
        //   groups.each(function(g) {
        //     var container = g.containingGroup;
        //     if(container !== null) {
        //       container.memberParts.each(function(m) {
        //         if(m !== g && m instanceof go.Group) {
        //           m.collapseSubGraph();
        //         }
        //       })
        //     }
        //   })
        // }
      });
      myDiagram.isReadOnly = false;

      function makeLayout(horiz) {
        // a Binding conversion function
        if (horiz) {
          return $(go.GridLayout, {
            wrappingWidth: Infinity,
            alignment: go.GridLayout.Position,
            cellSize: new go.Size(1, 1),
            spacing: new go.Size(4, 4),
          });
        } else {
          return $(go.GridLayout, {
            wrappingColumn: 1,
            alignment: go.GridLayout.Position,
            cellSize: new go.Size(1, 1),
            spacing: new go.Size(4, 4),
          });
        }
      }
      function defaultColor(horiz) {
        // a Binding conversion function
        return horiz ? "#da694b" : "#254361";
      }

      function defaultFont(horiz) {
        // a Binding conversion function
        return horiz ? "20px Kanit" : "18px Kanit";
      }

      function checkSubject(check) {
        if (check === 1) {
          return "#47D930";
        } else if (check === -1) {
          return "#F14646";
        } else {
          return "#BDC3C7"; //"#C39BD3";
        }
      }

      function highlightGroup(e, grp, show) {
        if (!grp) return;
        e.handled = true;
        if (show) {
          // cannot depend on the grp.diagram.selection in the case of external drag-and-drops;
          // instead depend on the DraggingTool.draggedParts or .copiedParts
          var tool = grp.diagram.toolManager.draggingTool;
          var map = tool.draggedParts || tool.copiedParts; // this is a Map
          // now we can check to see if the Group will accept membership of the dragged Parts
          if (grp.canAddMembers(map.toKeySet())) {
            grp.isHighlighted = true;
            return;
          }
        }
        grp.isHighlighted = false;
      }

      // function statusStudy(show) {
      //   for(var i=1; i<=4; i++){
      //     if(this.status===i){
      //       return show;
      //     }else{
      //       return false;
      //     }
      //   }
      // }

      myDiagram.groupTemplate = $(
        go.Group,
        "Auto",
        {
          background: "transparent",
          ungroupable: true,
          // highlight when dragging into the Group
          mouseDragEnter: function(e, grp) {
            highlightGroup(e, grp, true);
          },
          mouseDragLeave: function(e, grp) {
            highlightGroup(e, grp, false);
          },
          computesBoundsAfterDrag: false,
          // when the selection is dropped into a Group, add the selected Parts into that Group;
          // if it fails, cancel the tool, rolling back any changes

          handlesDragDropForMembers: false, // don't need to define handlers on member Nodes and Links
          // Groups containing Groups lay out their members horizontally
          layout: makeLayout(false),
          isSubGraphExpanded: true
        },
        new go.Binding("layout", "horiz", makeLayout),
        new go.Binding("background", "isHighlighted", function(h) {
          return h ? "rgba(255,0,0,0.2)" : "transparent";
        }).ofObject(),
        $(
          go.Shape,
          "RoundedRectangle",
          { fill: null, stroke: defaultColor(false), strokeWidth: 2 },
          new go.Binding("stroke", "horiz", defaultColor),
          new go.Binding("stroke", "color")
        ),
        $(
          go.Panel,
          "Vertical", // title above Placeholder
          $(
            go.Panel,
            "Horizontal", // button next to TextBlock
            {
              stretch: go.GraphObject.Horizontal,
              background: defaultColor(false),
            },
            new go.Binding("background", "horiz", defaultColor),
            new go.Binding("background", "color"),
            $("SubGraphExpanderButton", {
              alignment: go.Spot.Right,
              margin: 5,
            }),
            $(
              go.TextBlock,
              {
                alignment: go.Spot.Left,
                margin: 5,
                font: "18px Kanit",
                opacity: 0.75, // allow some color to show through
                stroke: "white",
              },
              new go.Binding("font", "horiz", defaultFont),
              new go.Binding("text", "text").makeTwoWay()
            )
          ), // end Horizontal Panel
          $(go.Placeholder, { padding: 5, alignment: go.Spot.TopLeft })
        ) // end Vertical Panel
      );

      myDiagram.nodeTemplate = $(
        go.Node,
        "Auto",
        $(
          go.Shape,
          "RoundedRectangle",
          { fill: checkSubject(), stroke: null },
          new go.Binding("fill", "check", checkSubject),
          new go.Binding("text", "text").makeTwoWay()
        ),
        $(
          go.TextBlock,
          {
            margin: 5,
            editable: true,
            font: "14px Kanit",
            opacity: 0.75,
            stroke: "#000",
          },
          new go.Binding("text", "text").makeTwoWay()
        )
      );

      myDiagram.layout = $(go.GridLayout, {
        wrappingColumn: 4,
        alignment: go.GridLayout.Position,
        cellSize: new go.Size(1, 1),
      });
      myDiagram.model = new go.GraphLinksModel(this.nodeSubject);
    },
  },
  mounted: function() {
    this.Diagram();
  },
};
</script>

<style scoped>
.title {
  padding-top: 20%;
}
</style>
