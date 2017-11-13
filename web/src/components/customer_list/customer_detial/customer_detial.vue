<template>
	<div class="detial">
		<el-button type="primary" class="back" @click="back()">Back</el-button>
		<el-form :inline='true' class="fromse">
			
				<el-form-item label="customer Type" class="custType" label-width="120px">
		          <el-select placeholder="PERSON">
		            <el-option label="PERSON" value="PERSON"></el-option>
		            <el-option label="Organization" value="Organization"></el-option>
		          </el-select>
		        </el-form-item>
		        
	        	<el-form-item label="First Name" class=" first" label-width="120px">
		          <el-input></el-input>
		        </el-form-item>
		        <el-form-item label="*Last Name" class="intens last" label-width="120px">
		          <el-input></el-input>
		        </el-form-item>
		        
	        	<el-form-item label="*Phone" class="intens phone" label-width="120px">
		          <el-input></el-input>
		        </el-form-item>
		        <el-form-item label="__" label-width="30px" class="phoneNum">
		          <el-input></el-input>
		        </el-form-item>
		       
		    	<el-form-item label="Email" class="email" label-width="120px">
		          <el-input type="email"></el-input>
		        </el-form-item>
		        <el-form-item label="*Country" class="intens country" label-width="120px">
		          <el-select placeholder="Indonesia">
		            <el-option label="Indonesia" value="Indonesia"></el-option>
		            <el-option label="Organization" value="Organization"></el-option>
		          </el-select>
		        </el-form-item>
		    
				<el-form-item label="Province" class="province" label-width="120px">
		          <el-select placeholder="Kalimantan Utara">
		            <el-option label="Kalimantan Utara" value="Kalimantan Utara"></el-option>
		            <el-option label="Organization" value="Organization"></el-option>
		          </el-select>
		        </el-form-item>
		        <el-form-item label="City" class="city" label-width="120px">
		          <el-select placeholder="Miami">
		            <el-option label="Miami" value="Miami"></el-option>
		            <el-option label="Organization" value="Organization"></el-option>
		          </el-select>
		        </el-form-item>
		        
			
				<el-form-item label="District" class="district" label-width="120px">
		          <el-select placeholder="British Columnbia">
		            <el-option label="British Columnbia" value="British Columnbia"></el-option>
		            <el-option label="Organization" value="Organization"></el-option>
		          </el-select>
		        </el-form-item>
				
				
				<el-form-item label="*Address" class="intens adres" label-width="120px">
		          <el-input></el-input>
		        </el-form-item>
				
				
		</el-form>
		<el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
		    <el-tab-pane label="install Base" name="first">
		    	<div class="table">
					<el-table
					    :data="tableData1"
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
		    </el-tab-pane>
		    <el-tab-pane label="Service Request" name="second">
		        <div class="table">
					<el-table
					    :data="tableData2"
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
		    </el-tab-pane>
		    <el-tab-pane label="Tasks" name="third">
		    	<div class="table">
					<el-table
					    :data="tableData3"
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
		    </el-tab-pane>
		</el-tabs>
		<el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" class="demo-form-inline fms">
	        <h3 class="cusinformation">
	          Service Request
	          <el-form-item class="btn" label="search" label-width="70px">
	            <el-input
	              placeholder=""
	              icon="search"
	              v-model="input"
	              :on-icon-click="handleIconClick">
	            </el-input>
	            <el-button type="primary" :plain="true" @click="submitForm2('ruleForm')">save</el-button>
	            <el-button type="primary" @click="resetForm('ruleForm')">reset</el-button>
	            <el-button type="primary" @click="resetForm('ruleForm')">cancle</el-button>
	          </el-form-item>
	        </h3>
	        <el-dialog
	          title="tips"
	          class="dialogSR"
	          :visible.sync="dialogVisible"
	          width="30%">
	          <i class="el-icon-error"></i>
	          <span>Service Request {{ruleForm.user}} Created</span>
	          <span slot="footer" class="dialog-footer">
	            <el-button @click="dialogVisible = false">Cancel</el-button>
	            <el-button type="primary" @click="processSR()">Processing SR</el-button>
	            <el-button type="primary" @click="another()">Create another</el-button>
	          </span>
	        </el-dialog>
	        <el-dialog
	          class="dialogCust"
	          :visible.sync="dialogVisible0"
	          width="30%">
	          <i class="el-icon-close close" @click="dialogVisible0=false"></i>
	          <i class="el-icon-close check"></i>
	          <span>Service Request Created Failed</span>
	        </el-dialog>
	        <div class="row1">
	          <el-form-item label="*SR Type" class="intensive">
	            <el-select v-model="ruleForm.srType" placeholder="Warranty Repair">
	              <el-option label="Warranty Repair" value="Warranty Repair"></el-option>
	              <el-option label="Non Warranty Repair" value="Non Warranty Repair"></el-option>
	              <el-option label="Extended Repair" value="Extended Repair"></el-option>
	              <el-option label="PM Non Repair" value="PM Non Repair"></el-option>
	              <el-option label="FG DOA TC" value="FG DOA TC"></el-option>
	            </el-select>
	          </el-form-item>
	          <el-form-item label="Status">
	            <el-select v-model="ruleForm.status" placeholder="Open">
	              <el-option label="Open" value="Open"></el-option>
	              <el-option label="Pending Repair" value="Pending Repair"></el-option>
	              <el-option label="Accepted" value="Accepted"></el-option>
	              <el-option label="Closed" value="Closed"></el-option>
	              <el-option label="Assigned" value="Assigned"></el-option>
	            </el-select>
	          </el-form-item>
	          <el-form-item label="SR Number">
	            <el-input v-model="ruleForm.srNumber"></el-input>
	          </el-form-item>
	          <el-form-item label="Incident Date">
	            <el-input v-model="ruleForm.incidentDate"></el-input>
	          </el-form-item>
	        </div>
	        <div class="row1">
	          <el-form-item label="Urgency">
	            <el-select v-model="ruleForm.urgency" placeholder="Critical">
	              <el-option label="Critical" value="Critical"></el-option>
	              <el-option label="Height" value="Height"></el-option>
	              <el-option label="Medium" value="Medium"></el-option>
	              <el-option label="Low" value="Low"></el-option>
	            </el-select>
	          </el-form-item>
	          <el-form-item label="SR Group">
	            <el-input v-model="ruleForm.srGroup"></el-input>
	          </el-form-item>
	          <el-form-item label="SR Owner">
	            <el-input v-model="ruleForm.srOwner"></el-input>
	          </el-form-item>
	          <el-form-item label="Closed Date">
	            <el-input v-model="ruleForm.closedDate"></el-input>
	          </el-form-item>
	        </div>
	        <div class="referSr">
	          <el-form-item label="Reference SR">
	            <el-select v-model="ruleForm.referenceSR" placeholder="Critical">
	              <el-option label="Critical" value="Critical"></el-option>
	              <el-option label="Height" value="Height"></el-option>
	              <el-option label="Medium" value="Medium"></el-option>
	              <el-option label="Low" value="Low"></el-option>
	            </el-select>
	          </el-form-item>
	          <el-form-item label="*Summary" class="intensive">
	            <el-input v-model="ruleForm.summary" class="summary"></el-input>
	          </el-form-item>
	        </div>
	        <div class="notesUpload">
	          <el-form-item label="Notes">
	            <el-input v-model="ruleForm.notes" class="notes"></el-input>
	          </el-form-item>
	          <el-upload
	            class="upload-demo shelf"
	            drag
	            action="https://jsonplaceholder.typicode.com/posts/"
	            multiple>
	            <i class="el-icon-upload"></i>
	            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
	          </el-upload>
	          <el-upload class="btnload" 
	            action="https://jsonplaceholder.typicode.com/posts/" multiple>
	            <el-button type="primary">upload</el-button>
	          </el-upload>
	        </div> 
	    </el-form>
	</div>
</template>
<script>
	import './customer_detial.scss'
	export default{
		data(){
			return {
				datalist:{},
				activeName:'second',
				ruleForm: {
		          user: '',
		          region: '',
		          country:'',
		          mail:'',
		          phone:'',
		          province:'',
		          district:'',
		          city:'',
		          address:''
		        },
		        rules:{

		        },
				tableData1: [{
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
		        }],
		        tableData2: [{
		          date: '2016',
		          name: '小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2017',
		          name: '王小',
		          province: '上海',
		          city: '普陀区',
		          address: '普陀区金沙江路 1518 弄',
		          zip: 200333
		        }],
		        tableData3: [{
		          date: '99',
		          name: '虎',
		          province: '海',
		          city: '普陀区',
		          address: '金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '17',
		          name: '王',
		          province: '上海',
		          city: '普陀区',
		          address: '金沙江路 1518 弄',
		          zip: 200333
		        }]
			}
		},
		created(){
			this.datalist = this.$route.params;
			console.log(this.datalist);
		},
		methods:{
			back(){
				this.$router.push({name:'CustomerList'});
			},
			handleClick(tab, event) {
		       console.log(tab, event);
		    },
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
		    }
		}
	}
</script>