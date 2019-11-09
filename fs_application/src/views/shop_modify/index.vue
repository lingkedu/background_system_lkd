<template>
  <!-- <div>
  添加商铺
  </div>-->
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm uploadForm"
    style="width:600px"
    enctype="multipart/form-data"
  >
    <el-form-item label="店铺社会统一信用码" required>
        <el-input v-model ="ruleForm.id" name = "id" disabled></el-input>
    </el-form-item>
    <el-form-item label="店铺名称" prop="name">
      <el-input v-model="ruleForm.name" name="name"></el-input>
    </el-form-item>
    <el-form-item label="详细地址" prop="address">
      <el-input v-model="ruleForm.address" name="address"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" prop="phone">
      <el-input v-model="ruleForm.phone" name="phone"></el-input>
    </el-form-item>
    <el-form-item label="店铺简介" prop="info">
      <el-input v-model="ruleForm.info" name="info"></el-input>
    </el-form-item>
    <el-form-item label="店铺标语" prop="slogan">
      <el-input v-model="ruleForm.slogan" name='slogan'></el-input>
    </el-form-item>
    <el-form-item label="店铺分类">
      <el-cascader v-model="value" :options="options1" clearable name='category'></el-cascader>
    </el-form-item>
    <el-form-item label="店铺特点" required>
      <ul>
        <li v-for="item in feature" :key="item.id">
          <el-switch v-model="item.f" :active-text="item.text"></el-switch>
        </li>
      </ul>
    </el-form-item>
    <el-form-item label="配送费" required>
      <el-input-number name='delivery' v-model="delivery" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </el-form-item>
    <el-form-item label="起送价" required>
      <el-input-number name='price' v-model="price" @change="handleChange" :min="10" :max="30" label="描述文字"></el-input-number>
    </el-form-item>
    <el-form-item label="营业时间" required>
      <el-time-select
        placeholder="起始时间"
        name='startTime'
        v-model="startTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
      ></el-time-select>
      <el-time-select
        placeholder="结束时间"
        name='endTime'
        v-model="endTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
      ></el-time-select>
    </el-form-item>
    <el-form-item label="上传店铺头像" required>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess_0"
      >
        <img v-if="imageUrl_head" :src="imageUrl_head" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="上传营业执照" required>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess_1"
      >
        <img v-if="imageUrl_charter" :src="imageUrl_charter" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="上传餐饮服务许可证" required>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess_2"
      >
        <img v-if="imageUrl_certificate" :src="imageUrl_certificate" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="优惠活动" required>
      <el-select v-model="valuer" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.valuer"
          :label="item.label"
          :value="item.valuer"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-table :data="tableData" style="width: 100%;background-color:red" max-height="250">
        <el-table-column fixed prop="date" label="活动标题"  ></el-table-column>
        <el-table-column prop="name" label="活动名称" ></el-table-column>
        <el-table-column prop="province" label="活动详情"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.native="submitForm()">立即创建</el-button>
      <!-- <el-button @click="resetForm()">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id:'',
        name: "",
        address: "",
        phone: "",
        info: "",
        slogan: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入地址名称", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        info: [
          { required: true, message: "请输入店铺简介", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        slogan: [
          { required: true, message: "请输入店铺标语", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        edit: [
          { required: true, message: "请输入店铺标语", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      value:'',   
      options1: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      feature: [
        {
          id: 1,
          text: "品牌保证",
          f: false,
          value1: false
        },
        {
          id: 2,
          text: "新开店铺",
          f: false,
          value1: false
        },
        {
          id: 3,
          text: "蜂鸟专送",
          f: false,
          value1: false
        },
        {
          id: 4,
          text: "外卖保",
          f: false,
          value1: false
        },
        {
          id: 5,
          text: "开发票",
          f: false,
          value1: false
        },
        {
          id: 6,
          text: "准时达",
          f: false,
          value1: false
        }
      ],
      delivery: 1,
      price: 10,
      startTime: "",
      endTime: "",
      imageUrl_head: "",
      imageUrl_charter: "",
      imageUrl_certificate: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      valuer: "",
      tableData: [
        {
          id: 1,
          edit: "",
          name: "",
          details: ""
        },
        {
          id: 2,
          edit: "",
          name: "",
          details: ""
        }
      ]
    };
  },
  methods: {   
    submitForm() {
       let form = new FormData($('.uploadForm')[0])
       form.append('category',this.value ) //店铺分类

       var featureFlag = []
       this.feature.map( (item,index ) => {
         if(item.f){
            // featureFlag['flag_'+ index ] = item.f
              featureFlag.push(item.text )
          }       
       })
       form.append('feature', JSON.stringify(featureFlag))

       form.append('imageUrl_head',this.imageUrl_head)
       form.append('imageUrl_charter',this.imageUrl_charter)
       form.append('imageUrl_certificate',this.imageUrl_certificate)
       form.append('_id',this.$route.query._id)
        var _this = this 
        $.ajax({
        url: 'http://localhost:3000/shop',
        type: 'put',
        cache: false, //不必须
        data: form,
        processData: false,//必须
        contentType: false,//必须
        success: function(data) {
          const result = JSON.parse( data )
          switch ( result.status ) {
            case 0:
              _this.$message({
                showClose: true,
                message: '店铺已经存在，请您确认过之后再次添加',
                type: 'warning'
              });
              break;
            case 2:
              _this.$message({
                showClose: true,
                message: '添加成功，即将自动条状列表页面',
                type: 'success',
                duration: 1000
              });
             let tenm=setTimeout(() => {
                 _this.$message.close()
                 _this.$router.push('/shop')
              },1000);
                          
              break;
          
            default:
              break;
          }
        }
      })
    },
    handleChange(value) {
      // console.log(value);
    },
    handleAvatarSuccess_0(res, file) {
      this.imageUrl_head = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess_1(res, file) {
      this.imageUrl_charter = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess_2(res, file) {
      this.imageUrl_certificate = URL.createObjectURL(file.raw);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  mounted () {
   const { id,name,address,phone,info,slogan,feature,delivery,price,startTime,endTime,imageUrl_head,imageUrl_charter,imageUrl_certificate } = this.$route.query
   this.feature.map( item => {
      if ( feature.indexOf( item.text ) != -1 ) {
        item.f = true 
        return 
      }
   })
   this.ruleForm.id=id
   this.ruleForm.name=name
   this.ruleForm.address=address
   this.ruleForm.phone=phone
   this.ruleForm.info=info
   this.ruleForm.slogan=slogan
   this.delivery = delivery 
   this.price = price 
   this.startTime = startTime
   this.endTime = endTime
   this.imageUrl_head = imageUrl_head
   this.imageUrl_charter = imageUrl_charter
   this.imageUrl_certificate = imageUrl_certificate
  }
};
</script>


<style>
.el-form-item ul {
  float: left;
  width: 450px;
}
.el-form-item ul li {
  float: left;
  width: 150px;
}

.el-form-item .el-form-item__content .el-date-editor {
  margin-right: 10px;
}

.el-container .el-main .el-form .el-form-item .el-form-item__label {
  padding-right: 10px !important;
  text-align: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-table .el-table__header-wrapper .el-table__header{
  background-color: red !important;
}

/* .el-table tr{
   background-color: red !important;
} */
</style>