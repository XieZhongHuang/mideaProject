<template>
	<div class="createClaim" v-loading.body="loading">
		<div class="tops">
			<el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" class="demo-form-inline forms">
		      <h3 class="cusinformation">Charge Header</h3>
		      <div class="row1">
		        <el-form-item label="Claim No.">
		          <el-input v-model="ruleForm.ClaimNo"></el-input>
		        </el-form-item>
		        <el-form-item label="Claim Type">
		          <el-select v-model="ruleForm.ClaimType" placeholder="">
		            <el-option label="" value=""></el-option>
		            <el-option label="" value=""></el-option>
		          </el-select>
		        </el-form-item>
		      </div>
		      <div class="row1">
		        <el-form-item label="Submision Date">
		          <el-input v-model="ruleForm.SubmisionDate"></el-input>
		        </el-form-item>
		        <el-form-item label="Claim Status">
		          <el-input v-model="ruleForm.ClaimStatus"></el-input>
		        </el-form-item>
		      </div>
		      <div class="row1">
		        <el-form-item label="Asp Comments">
			        <el-input v-model="ruleForm.AspComments"></el-input>
			      </el-form-item>
		        <el-form-item label="Approved Date">
		          <el-input v-model="ruleForm.ApprovedDate"></el-input>
		        </el-form-item>
		      </div>
		      <div class="row1">
		        <el-form-item label="HQ AP invoice">
		          <el-input v-model="ruleForm.HqApInvoice"></el-input>
		        </el-form-item>
		        <el-form-item label="ASP Invoice N0.">
		          <el-input v-model="ruleForm.AspInvoiceNo"></el-input>
		        </el-form-item>
		      </div>
		      <div class="row1">
		        <el-form-item label="TAX Amount">
		          <el-input v-model="ruleForm.TaxAmount"></el-input>
		        </el-form-item>
		        <el-form-item>
		        </el-form-item>
		      </div>
		    </el-form>
		</div>
		<div class="bottom">
			<h3 class="header">
				Charge lines
				<div class="btn">
					<el-button type="primary" @click="save()">Save</el-button>
		        	<el-button type="primary" @click="New()">New</el-button>
				</div>
			</h3>
			<div class="content">
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
			</div>
		</div>
	</div>
</template>
<script>
	import './create_claim.scss'
	export default {
		data(){
			return{
				loading:true,
				ruleForm:{
					ClaimNo:'',
					ClaimType:'',
					ClaimStatus:'',
					SubmisionDate:'',
					AspInvoiceNo:'',
					HqApInvoice:'',
					ApprovedDate:'',
					AspComments:'',
					TaxAmount:''
				},
				rules:{},
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
				this.loading = false
			}.bind(this),2000)
		},
		methods:{
			handleClick(row) {
		      console.log(row);
		    },
			save(){

			},
			New(){

			}
		}
	}
</script>