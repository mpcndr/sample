<template>
  <div>
    <div id="mySubcal" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import go from "gojs";
export default {
  name: "popup",
  props: {},
  data() {
    return {
      nodeSubject: [
          {key: "A"},
          {key: "B"},
          {key: "C"}
      ],
    };
  },
  methods: {
    Diagram: function() {
      var $ = go.GraphObject.make;
      var myDiagram = $(go.Diagram, "mySubcal", {
        "undoManager.isEnabled": true,
      });
      myDiagram.isReadOnly = true;
      myDiagram.model = new go.Model(this.nodeSubject);
    },
  },
  created() {
    this.Diagram();
  },
};
</script>

<style scoped>
</style>
