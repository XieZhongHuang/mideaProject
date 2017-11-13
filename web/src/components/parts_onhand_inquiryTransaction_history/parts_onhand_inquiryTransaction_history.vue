<template>
	<div class="partsOnhand" v-loading.body='loading'>
		<div class="conditions">
			<el-form :inline='true' :model="form">
				<div class="condition">
					<el-form-item label="Item Category" label-width="120px">
			          <el-input v-model="form.category"></el-input>
			        </el-form-item>
			        <el-form-item label="Item" label-width="60px">
			          <el-input v-model="form.item"></el-input>
			        </el-form-item>
			        <el-form-item label="Item Description" label-width="150px">
			          <el-input v-model="form.description"></el-input>
			        </el-form-item>
			    </div>
		    </el-form>
			<div class="elses">
				<el-form :inline='true' :model="form">
					<div class="condition">
						<el-form-item label="Item Category" label-width="120px">
				          <el-input v-model="form.category"></el-input>
				        </el-form-item>
				        <el-form-item label="Item" label-width="60px">
				          <el-input v-model="form.item"></el-input>
				        </el-form-item>
				        <el-form-item label="Item Description" label-width="150px">
				          <el-input v-model="form.description"></el-input>
				        </el-form-item>
				    </div>
			    </el-form>
				<el-form :inline='true' :model="form">
					<div class="condition">
						<el-form-item label="Item Category" label-width="120px">
				          <el-input v-model="form.category"></el-input>
				        </el-form-item>
				        <el-form-item label="Item" label-width="60px">
				          <el-input v-model="form.item"></el-input>
				        </el-form-item>
				        <el-form-item label="Item Description" label-width="150px">
				          <el-input v-model="form.description"></el-input>
				        </el-form-item>
				    </div>
			    </el-form>
				<el-form :inline='true' :model="form">
					<div class="condition">
						<el-form-item label="Item Category" label-width="120px">
				          <el-input v-model="form.category"></el-input>
				        </el-form-item>
				        <el-form-item label="Item" label-width="60px">
				          <el-input v-model="form.item"></el-input>
				        </el-form-item>
				        <el-form-item label="Item Description" label-width="150px">
				          <el-input v-model="form.description"></el-input>
				        </el-form-item>
				    </div>
			    </el-form>
			</div>
			<span class="down" @click='down($event)'><i class="el-icon-fa-angle-double-down"></i></span>
			<span class="up" @click="up($event)"><i class="el-icon-fa-angle-double-up"></i></span>
		</div>
		<div class="datagrid">
			<div class="btn">
				<el-button type="primary" @click="">SubinventoryTransfer</el-button>
		        <el-button type="primary" @click="">PurcharseOrder</el-button>
		        <el-button type="primary" @click="">Search</el-button>
		        <el-button type="primary" @click="">Reset</el-button>
			</div>
			<div class="table">
				<el-table
				    :data="tableData"
				    border
				    @row-dblclick='dbl()'
				    style="width: 100%,text-align:center">
				    <el-table-column
				      fixed
				      prop="date"
				      label="日期"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="province"
				      label="省份"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="city"
				      label="市区"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="zip"
				      label="邮编"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="150">
				      <template scope="scope">
				        <el-button
				          size="small"
				          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				        <el-button
				          size="small"
				          type="danger"
				          @click="handleDelete($event,scope.$index, scope.row)">删除</el-button>
				      </template>
				    </el-table-column>
			    </el-table>
				<div class="block">
					<el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page.sync="currentPage"
				      :page-size="100"
				      layout="prev, pager, next, jumper"
				      :total="1000">
				    </el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import './parts_onhand_inquiryTransaction_history.scss'
	import $ from 'jquery'
	export default {
		data(){
			return {
				form:{
					category:'',
					item:'',
					description:'',
				},
				loading:true,
				currentPage:1,
				tableData: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-02',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }]
			}
		},
		created(){
	      setTimeout(function(){
	         this.loading = false;
	      }.bind(this),2000);
	    },
		methods:{
			handleEdit(index,row){

			},
			dbl(){
				console.log(666);
			},
			handleDelete(ev,index,row){
				console.log($(ev.target));
			},
		    handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    }, 
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    },
			down:function(e){
				console.log();
				$(e.target).closest('.down').hide();
				$(e.target).closest('.conditions').find('.elses').animate({height:150});
				$(e.target).closest('.conditions').find('.up').show();
			},
			up:function(e){
				console.log(e);
				$(e.target).closest('.up').hide();
				$(e.target).closest('.conditions').find('.elses').animate({height:0});
				$(e.target).closest('.conditions').find('.down').show();
			}
		}
	}
</script>