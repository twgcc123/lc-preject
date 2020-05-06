<template>
  <view :class="['dropdown-menu-item', isActive?'isActive-menu':'']"
    @click="handleClick">
    <text class="dropdown-menu-value">{{currentText}}</text>
    <view :class="['iconfont icon-down']"></view>
  </view>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
      default: ''
    },
    options: {
      required: true,
      type: Array,
      default: () => []
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentText() {
      const item = this.options.find(option => option.value === this.currentValue);
      return item.text;
    }
  },
  watch: {
    value: {
      handler: function (newValue) {
        this.currentValue = newValue;
      },
      immediate: true
    },
    active: {
      handler: function (newValue) {
        this.isActive = newValue;
      },
      immediate: true
    }
  },
  data() {
    return {
      isActive: false,
      currentValue: '',
      id: new Date().getTime()
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      uni.$emit('dropdownMenuItemClick', this.currentValue, this.options, this.isActive, this.id);
      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 50);
    },
    onCloseAllMenu() {
      this.isActive = false;
    },
    menuChange(item, index, id) {
      if (id && this.id === id) {
        this.currentValue = item.value;
      }
      this.onCloseAllMenu();
    }
  },
  mounted() {
    uni.$on('closeAllMenu', this.onCloseAllMenu);
    uni.$on('menuChange', this.menuChange);
  }
}
</script>

<style lang="less" scoped>
.dropdown-menu-item {
  display: flex;
  align-items: center;
  .dropdown-menu-value {
    font-size: 14px;
  }
  .icon-down {
    color: #dedede;
    font-size: 12px;
    margin-left: 5rpx;
    transition: all 0.3s;
    transform: rotate(0deg);
  }
}
.isActive-menu {
  color: #0076ff;
  & .icon-down {
    color: #0076ff;
    transform: rotate(-180deg);
  }
}
</style>
