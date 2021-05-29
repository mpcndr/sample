<template>
  <div>
    <!-- <TutorAnimation2></TutorAnimation2> -->
    <div class="dataSub">
      <div id="myDiagramDiv" style="width: 100vw; height:62vh;"></div>
    <div id="myAsignatura" style="width: 100vw; height:29.5vh;"></div>
    </div>
    
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
                <img src="../assets/รายวิชา.jpg" style="width: 80vw" />
              </div>
            </div>
          </div>
          <div class="panel-footer button-right">
            <button
              id="close"
              class="btn btn-lg btn-primary"
              v-on:click="show = !show"
              @click="CloseButton()"
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
// import Axios from "axios";
//import queryString from "query-string";
import go from "gojs";
// import TutorAnimation2 from "../components/TutorAnimation2.vue";
export default {
  name: "diagram_dataSubject",
  components: {
    // TutorAnimation2,
  },
  data: function() {
    return {
      nodeDataArray: [],
      linkDataArray: [],
      show: true,
    };
  },
  methods: {
    getUnits: function() {
      var $ = go.GraphObject.make;

      var myDiagram = $(go.Diagram, "myDiagramDiv", {
        initialAutoScale: go.Diagram.UniformToFill,
        maxScale: 0.8,
        initialContentAlignment: go.Spot.Center,
        isReadOnly: false,
        "animationManager.isEnabled": false,
        "undoManager.isEnabled": true,
        layout: $(go.TreeLayout, {
          angle: 0,
          //sorting: go.TreeLayout.SortingAscending,
          layerSpacing: 40,
          nodeSpacing: 20,
          layerStyle: go.TreeLayout.LayerUniform,
          treeStyle: go.TreeLayout.StyleLayered,
        }),
        maxSelectionCount: 1,
        ChangedSelection: showLocalOnFullClick,
      });

      var myAsignatura = $(go.Diagram, "myAsignatura", {
        initialAutoScale: go.Diagram.UniformToFill,
        initialContentAlignment: go.Spot.Center,
        isReadOnly: false,
        layout: $(go.TreeLayout, {
          angle: 0,
          //sorting: go.TreeLayout.SortingAscending
          layerSpacing: 60,
          nodeSpacing: 40,
          layerStyle: go.TreeLayout.LayerUniform,
          //treeStyle: go.TreeLayout.StyleLayered,
          //alignment: go.TreeLayout.AlignmentEnd,
          //arrangement: go.TreeLayout.ArrangementVertical,
          //sorting: go.TreeLayout.SortingAscending
        }),
        LayoutCompleted: function(e) {
          var sel = e.diagram.selection.first();
          if (sel !== null) myAsignatura.scrollToRect(sel.actualBounds);
        },
        maxSelectionCount: 1,
        ChangedSelection: showLocalOnLocalClick,
      });

      myDiagram.model = new go.GraphLinksModel(
        this.nodeDataArray,
        this.linkDataArray
      );
      myDiagram.undoManager.isEnabled = true;

      myDiagram.isReadOnly = true;
      // groupTemplate data background
      myDiagram.groupTemplate = $(
        go.Group,
        "Vertical",
        {
          avoidable: false,
        },
        $(go.GridLayout, {
          wrappingColumn: 20,
          alignment: go.GridLayout.Position,
          cellSize: new go.Size(50, 10),
        }),
        $(
          go.Panel,
          "Horizontal",
          { margin: 2 },
          $(
            go.TextBlock,
            {
              row: 0,
              column: 1,
              font: "22px Kanit",
              textAlign: "center",
              stretch: go.GraphObject.Horizontal,
            },
            new go.Binding("text")
          ),
          $(go.Placeholder, { row: 1, columnSpan: 2, padding: 25 })
        )
      );

      myDiagram.layout = $(go.GridLayout, { isRealtime: true });

      myDiagram.nodeTemplate = $(
        go.Node,
        "Auto",
        {
          fromSpot: go.Spot.MiddleRight,
          toSpot: go.Spot.MiddleLeft,
        },
        $(
          go.Shape,
          "RoundedRectangle",
          { strokeWidth: 0 },
          new go.Binding("fill", "color")
        ),
        $(
          go.TextBlock,
          { margin: 5 },

          new go.Binding("text", "key")
        ),
        {
          toolTip: $(
            "ToolTip",
            $(go.TextBlock, { margin: 4 }, new go.Binding("text", "color"))
          ),
        }
      );
      function diagramInfo(model) {
        console.log("sfds;lfk");
        return (
          "Model:\n" +
          model.nodeDataArray.length +
          " nodes, " +
          model.linkDataArray.length +
          " links"
        );
      }

      myDiagram.toolTip = $(
        "ToolTip",
        $(
          go.TextBlock,
          { margin: 4 },
          // use a converter to display information about the diagram model
          new go.Binding("text", "", diagramInfo)
        )
      );
      myDiagram.linkTemplate = $(go.Link, {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver,
        fromSpot: go.Spot.BottomCenter,
        toSpot: go.Spot.MiddleTop,
      });

      var myNodeTemplate = $(
        go.Node,
        "Auto",

        {
          locationSpot: go.Spot.Center,
          click: function(e, node) {
            var diagram = node.diagram;
            diagram.startTransaction("highlight");
            diagram.clearHighlighteds();
            node.findLinksConnected().each(function(l) {
              l.isHighlighted = true;
            });
            node.findNodesConnected().each(function(n) {
              n.isHighlighted = true;
            });

            diagram.commitTransaction("highlight");
          },
        },
        new go.Binding("text", "key", go.Binding.toString),
        $(
          go.Shape,
          "RoundedRectangle",
          new go.Binding("fill", "grade", checkSubject),
          new go.Binding("stroke", "isHighlighted", function(h) {
            return h ? "black" : "grey";
          }).ofObject(),
          //new go.Binding("strokeWidth", "isHighlighted", function(h) { return h ? 2 : 2; }).ofObject(),
          {
            stroke: "black",
            strokeWidth: 1,
          }
        ),
        {
          selectionAdornmentTemplate: $(
            go.Adornment,
            "Auto",
            $(
              go.Shape,
              "RoundedRectangle",
              {
                fill: null,
                stroke: "#FF0000" /*dimgrey,dodgerblue*/,
                strokeWidth: 4,
              }
              //new go.Binding("stroke", "color")
            ),
            $(go.Placeholder, { padding: -2 })
          ),
        },
        $(
          go.TextBlock,
          "Default Text",
          {
            margin: 6,
            font: "20px Kanit",
            stroke: "#000",
            //editable: true
          },
          new go.Binding("text", "name").makeTwoWay()
        )
      );

      myDiagram.nodeTemplate = myNodeTemplate;
      myAsignatura.nodeTemplate = myNodeTemplate;

      var myLinkTemplate = $(
        go.Link,
        {
          click: function(e, link) {
            const diagram = link.diagram;
            diagram.startTransaction("highlight");
            diagram.clearHighlighteds();
            link.isHighlighted = true;
            link.fromNode.isHighlighted = true;
            link.toNode.isHighlighted = true;
            diagram.commitTransaction("highlight");
          },
          routing: go.Link.AvoidsNodes /*Normal*/,
          selectable: true,
          corner: 8,

          //relinkableFrom: true,
          //relinkableTo: true,
          curve: go.Link.JumpGap,
          fromSpot: go.Spot.BottomCenter,
          toSpot: go.Spot.TopCenter,
        },

        //link node
        $(
          go.Shape,
          new go.Binding("stroke", "isHighlighted", function(h) {
            return h ? "#FF0000" : "#C19A6B";
            // color with stroke
          }).ofObject(),
          new go.Binding("strokeWidth", "isHighlighted", function(h) {
            return h ? 4 : 2;
            //link stroke highlight : not hightlight
          }).ofObject(),
          //{ stroke: "silver", strokeWidth: 2 }
          new go.Binding("strokeDashArray", "isHighlighted", function(h) {
            return h ? [0, 0] : [0, 0];
            // link hightlight แบบเส้นประ [ขนาด : ระยะห่าง]
          }).ofObject(),
          { name: "PIPE", strokeCap: "round" }
        ),
        $(go.Shape, { toArrow: "Standard", strokeWidth: 4, stroke: "#C19A6B" }),

        {
          selectionAdornmentTemplate: $(go.Adornment, "Auto"),
        }
      );
      myDiagram.linkTemplate = myLinkTemplate;
      myAsignatura.linkTemplate = myLinkTemplate;

      myDiagram.addDiagramListener("InitialLayoutCompleted", function() {
        var node0 = myDiagram.findPartForKey(0);
        if (node0 !== null) node0.isSelected = true;
        showLocalOnFullClick();
      });

      function checkSubject(grade) {
        if (grade == 1) {
          return "#93C572";
        } else if (grade == -1) {
          return "#E3735E";
        } else if (grade == -2) {
          return "#F8DE7E";
        } else {
          return "#E5E4E2";
        }
      }

      function showLocalOnFullClick() {
        var node = myDiagram.selection.first();
        if (node !== null && node instanceof go.Node) {
          //highlighter.visible = true;
          myDiagram.scrollToRect(node.actualBounds);
          // highlighter.location = node.location;

          var model = new go.GraphLinksModel();
          var nearby = node.findTreeParts(2);
          //var parent = node.findTreeParentNode();
          var links = node.findLinksConnected();
          var nodes = node.findNodesInto();
          //nearby.add(nodes);

          nearby.each(function(n) {
            if (n instanceof go.Node) model.addNodeData(n.data);
            //model.addLinkData(n.data);
          });

          links.each(function(l) {
            model.addLinkData(l.data);
          });
          nodes.each(function(n) {
            model.addNodeData(n.data);
          });

          myAsignatura.model = model;
          var selectedLocal = myAsignatura.findPartForKey(node.data.key);
          if (selectedLocal !== null) selectedLocal.isSelected = true;
        } else {
          //asignatura.clearSelection();
          // highlighter.visible = false;
          myAsignatura.clear();
        }
      }
      myDiagram.click = function() {
        myDiagram.startTransaction("no highlighteds");
        myDiagram.clearHighlighteds();
        myDiagram.commitTransaction("no highlighteds");
      };
      function showLocalOnLocalClick() {
        var selectedLocal = myAsignatura.selection.first();
        if (selectedLocal !== null) {
          myDiagram.select(myDiagram.findPartForKey(selectedLocal.data.key));
        }
      }
    },
  },

  async created() {
    console.log("dtsj ==> " + this.$store.getters.getChoose);
    await fetch(this.$store.getters.getApi + "api/getcoursestudent/", {
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
        this.nodeDataArray = json.nodeDataArray;
        console.log(this.nodeDataArray);
      });
    await fetch(this.$store.getters.getApi + "api/getconditionsubject/", {
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
        this.linkDataArray = json.linkDataArray;
        console.log(this.linkDataArray);
      });
    this.getUnits();
    // Axios.post(this.$store.getters.getApi + "api/getconditionsubject/", {
    //   token: this.$store.getters.getToken,
    // }).then((res1) => {
    //   this.linkDataArray = res1.data.linkDataArray;
    // });
  },
};
</script>

<style scoped>
.dataSub {
  position: fixed;
  z-index: -1;
}
#ac-wrapper {
  position: fixed;
  z-index: 1001;
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
</style>
