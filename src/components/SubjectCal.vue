<template>
  <div>
    <div id="mySubcal" style="width: 100%; height: 100%"></div>
    <transition>
      <div class="ac-wrapper">
        <div id="popup" v-if="show">
          <div
            class="carousel slide"
            id="carouselExampleIndicators"
            data-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img src="../assets/วางแผน.jpg" style="width: 80vw" />
              </div>
            </div>
            <!-- <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a> -->
          </div>
          <div class="panel-footer button-right">
            <button
              id="close"
              class="btn btn-danger btn-lg"
              v-on:click="show = !show"
            >
              เข้าใจเเล้ว
            </button>
          </div>
        </div>
      </div>
    </transition>
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
      nodeSubject: [],
      subjects: [],
      show: true,
      Image: [
        {id: 1, img: "../assets/Untitled-3.jpg"}
      ]
    };
  },
  methods: {
    Diagram: function() {
      var $ = go.GraphObject.make;
      var myDiagram = $(go.Diagram, "mySubcal"                        , {

        maxScale: 1,
        minScale: 0.5,
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
      myDiagram.isReadOnly = true;

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
      // -----> color two Group
      function defaultColor(horiz) {
        // a Binding conversion function
        return horiz ? "#EADDCA" : "#C19A6B";
      }
      // --------->
      function defaultFont(horiz) {
        // a Binding conversion function
        return horiz ? "20px Kanit" : "18px Kanit";
      }
      // ---------> color subject in group <-----------
      function checkSubject(check) {
        if (check === 1) {
          return "#93C572";
        } else if (check === -1) {
          return "#E3735E";
        } else if (check == -2) {
          return "#F8DE7E";
        } else {
          return "#E5E4E2"; //"#C39BD3";
        }
      }

      // function highlightGroup(e, grp, show) {
      //   if (!grp) return;
      //   e.handled = true;
      //   if (show) {
      //     // cannot depend on the grp.diagram.selection in the case of external drag-and-drops;
      //     // instead depend on the DraggingTool.draggedParts or .copiedParts
      //     var tool = grp.diagram.toolManager.draggingTool;
      //     var map = tool.draggedParts || tool.copiedParts; // this is a Map
      //     // now we can check to see if the Group will accept membership of the dragged Parts
      //     if (grp.canAddMembers(map.toKeySet())) {
      //       grp.isHighlighted = true;
      //       return;
      //     }
      //   }
      //   grp.isHighlighted = false;
      // }

      myDiagram.groupTemplate = $(
        go.Group,
        "Auto",
        {
          background: "transparent",
          ungroupable: true,
          // highlight when dragging into the Group
          // mouseDragEnter: function(e, grp) {
          //   highlightGroup(e, grp, true);
          // },
          // mouseDragLeave: function(e, grp) {
          //   highlightGroup(e, grp, false);
          // },
          computesBoundsAfterDrag: false,
          // when the selection is dropped into a Group, add the selected Parts into that Group;
          // if it fails, cancel the tool, rolling back any changes

          handlesDragDropForMembers: false, // don't need to define handlers on member Nodes and Links
          // Groups containing Groups lay out their members horizontally
          layout: makeLayout(false),
          isSubGraphExpanded: true,
        },
        new go.Binding("layout", "horiz", makeLayout),
        new go.Binding("background", "isHighlighted", function(h) {
          return h ? "rgba(255,0,0,0.2)" : "transparent";
        }).ofObject(),
        $(
          go.Shape,
          "Rectangle",
          { fill: null, stroke: defaultColor(false), strokeWidth: 2.5 },
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
            $(
              // -----> font in header group
              go.TextBlock,
              {
                alignment: go.Spot.Left,
                margin: 10,
                font: "18px Kanit",
                opacity: 1, // allow some color to show through
                stroke: "black",
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
            opacity: 1,
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
  async created() {
    console.log("sjc ==> " + this.$store.getters.getChoose);
    await fetch(this.$store.getters.getApi + "api/getguide/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: this.$store.getters.getToken,
        choose: this.$store.getters.getChoose,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.nodeSubject = json.nodeSubject;
        console.log(this.nodeSubject);
      });
    this.Diagram();
  },
};
</script>

<style scoped>
#mySubcal {
  position: fixed;
  z-index: -1;
  zoom: unset;
}
#ac-wrapper {
  position: fixed;

  z-index: 1;
}
.button-right {
  position: absolute;
  bottom: 2%;
  right: 3%;
}
#popup {
  position: fixed;
  margin: 4% 10%;
}
/* a.carousel-control-prev {
  height: 50px;
  width: 50px;
  background-color: #000;
  margin-top: 20%;
  margin-left: -4%;
} */
/* a.carousel-control-next {
  height: 50px;
  width: 50px;
  background-color: #000;
  margin-top: 20%;
  margin-right: -4%;
} */
</style>
