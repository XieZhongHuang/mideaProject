<template>
	<div class="menus">
		<el-input
		  placeholder="输入关键字进行过滤"
		  v-model="filterText">
		</el-input>

		<el-tree
		  class="filter-tree"
		  :data="data2"
		  :expand-on-click-node="bul"
		  :props="defaultProps"
		  default-expand-all
		  :filter-node-method="filterNode"
		  @node-click="Click"
		  ref="tree2">
		</el-tree>
	</div>
	
</template>
<style>
	.menus{
		width: 310px;
		height:100%;
		border-right: 2px solid #ccc;
		overflow: auto;
		cursor:e-resize;
	}
	.el-tree{
		text-align: left;
		border: none;
		width:400px;
	}
</style>
<script>
	 import router from '../../router/'
	 export default {
	    watch: {
	      filterText(val) {
	      	console.log(this);
	        this.$refs.tree2.filter(val);
	      }
	    },

	    methods: {
	      filterNode(value, data) {
	        if (!value) return true;
	        return data.label.indexOf(value) !== -1;
	      },
	      Click(data,node,self){
    		console.log(data.label);
    		var rou = "/" + data.label;
    		router.push(rou);
    	  }
	    },
	    data() {
	      return {
	        filterText: '',
	        bul:false,
	        data2: [{
	          id: 1,
	          label: 'iService Portal',
	          children: [{
	          	id: 3,
	            label: 'Home',
	          },{
	          	id: 4,
	            label: 'Settings',
	          },{
	            id: 5,
	            label: '1.Service Request',
	            children: [{
	              id: 9,
	              label: 'Create Service Request',
	              children:[{
	              	id:21,
	              	label:'Search cust & IB'
	              },{
	              	id:22,
	              	label:'Create Cust'
	              },{
	              	id:23,
	              	label:'Create IB'
	              },{
	              	id:24,
	              	label:'Create SR'
	              },{
	              	id:25,
	              	label:'Edit Customer/IB/SR'
	              },{
	              	id:26,
	              	label:'Processing current SR'
	              }]
	            }, {
	              id: 10,
	              label: 'Service Request List'
	            }]
	          },{
	          	id: 6,
	            label: 'Inventory',
	            children:[{
	            	id:11,
	            	label:'Parts onhand inquiry&transaction history',
	            	children:[{
	            		id:27,
	            		label:'purchase order&receiving'
	            	},{
	            		id:28,
	            		label:'Subinventory transfer&transact history'
	            	}]
	            },{
	            	id:12,
	            	label:'Parts transaction history'
	            },{
	            	id:13,
	            	label:'Parts reciving/allocating'
	            }]
	          },{
	          	id:7,
	          	label:'Claim',
	          	children:[{
	          		id:14,
	          		label:'Create claim'
	          	},{
	          		id:15,
	          		label:'Claim list'
	          	}]
	          },{
	          	id:8,
	          	label:'Reports',
	          	children:[{
	          		id:16,
	          		label:'Customer List'
	          	},{
	          		id:17,
	          		label:'Install base list'
	          	},{
	          		id:18,
	          		label:'BOM list'
	          	}]
	          }]
	        }],
	        defaultProps: {
	          children: 'children',
	          label: 'label'
	        }
	      };
	    }
	  };
</script>