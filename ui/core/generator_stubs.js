/*
 * code generation for BIPES
 *
 */
let UPythonClass = {}

Blockly.Python['roop'] = function(block) {

  // var interval = block.getFieldValue('interval');
  // var timerNumber = block.getFieldValue('timerNumber');
  var statements_name = Blockly.Python.statementToCode(block, 'statements') || '  pass\n';
  // var               s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  
  Blockly.Python.definitions_['import_time'] = 'import time';

  // Blockly.Python.definitions_['import_timer_callback' ] = 'while True:\n' + statements_name + '\n'; 
  // Blockly.Python.definitions_['import_timer_callback' + timerNumber] = '\n#Thread function \ndef thread' + timerNumber + '():\n' + statements_name + '\n\n'; 

  var code = 'while True:\n' + statements_name + '  time.sleep_ms(1)\n\n';

  return code;
};

Blockly.Python['led_red'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['led_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';
  Blockly.Python.definitions_['led_all_off'] = 'gpio_set( 1 , False)\ngpio_set( 2 , False)\ngpio_set( 4 , False)\n';

  var code = 'gpio_set( 4 , ' + value_value + ')\n';
  return code;

};

Blockly.Python['led_green'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['led_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';
  Blockly.Python.definitions_['led_all_off'] = 'gpio_set( 1 , False)\ngpio_set( 2 , False)\ngpio_set( 4 , False)\n';

  var code = 'gpio_set( 2 , ' + value_value + ')\n';
  return code;

};

Blockly.Python['led_blue'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['led_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';
  Blockly.Python.definitions_['led_all_off'] = 'gpio_set( 1 , False)\ngpio_set( 2 , False)\ngpio_set( 4 , False)\n';

  var code = 'gpio_set( 1 , ' + value_value + ')\n';
  return code;

};

Blockly.Python['pwm_led_red'] = function(block) {
	var value_pin = 4;
	var value_frequency = 1000;
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['led_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';
  Blockly.Python.definitions_['led_all_off'] = 'gpio_set( 1 , False)\ngpio_set( 2 , False)\ngpio_set( 4 , False)\n';

  var code ='duty_val = int(' + value_duty +' / 100 * 65535)\n';
	code += `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty_u16(duty_val)\n`;
	return code;
};

Blockly.Python['pwm_led_green'] = function(block) {
	var value_pin = 2;
	var value_frequency = 1000;
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['led_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';
  Blockly.Python.definitions_['led_all_off'] = 'gpio_set( 1 , False)\ngpio_set( 2 , False)\ngpio_set( 4 , False)\n';

  var code ='duty_val = int(' + value_duty +' / 100 * 65535)\n';
	code += `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty_u16(duty_val)\n`;
	return code;
};

Blockly.Python['pwm_led_blue'] = function(block) {
	var value_pin = 1;
	var value_frequency = 1000;
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['led_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';
  Blockly.Python.definitions_['led_all_off'] = 'gpio_set( 1 , False)\ngpio_set( 2 , False)\ngpio_set( 4 , False)\n';

  var code ='duty_val = int(' + value_duty +' / 100 * 65535)\n';
	code += `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty_u16(duty_val)\n`;
	return code;
};

Blockly.Python['switch20_get'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['switch20_get'] = 'switch20 = Pin(20, Pin.IN)\n\n';
  var code = 'not (switch20.value())';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['switch21_get'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['switch21_get'] = 'switch21 = Pin(21, Pin.IN)\n\n';
  var code = 'not (switch21.value())';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['switch28_get'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['switch28_get'] = 'switch28 = Pin(28, Pin.IN, Pin.PULL_UP)\n\n';
  var code = 'not (switch28.value())';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['touch_get'] = function(block) {
  var value_threshold = Blockly.Python.valueToCode(block, 'threshold', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['touch'] = 'from touchget import touchget';
  var code = '(touchget('+value_threshold+'))';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['project_metadata'] = function(block) {
  var value_project_author = Blockly.Python.valueToCode(block, 'project_author', Blockly.Python.ORDER_ATOMIC);
  var value_project_iot_id = Blockly.Python.valueToCode(block, 'project_iot_id', Blockly.Python.ORDER_ATOMIC);
  var value_project_description = Blockly.Python.valueToCode(block, 'project_description', Blockly.Python.ORDER_ATOMIC);

  var code = '#Code automatically generated by BIPES (http://www.bipes.net.br)';
  code+='\n#Author: ' + value_project_author;
  code+='\n#IOT ID: ' + value_project_iot_id;
  code+='\n#Description: ' + value_project_description + '\n';
  return code;
};


Blockly.Python['delay'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep(' + value_time + ')\n';
  return code;
};

Blockly.Python['reset'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = 'machine.reset()\n';
  return code;
};

Blockly.Python["reset_cause_soft"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.SOFT_RESET"; 
	return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python["reset_cause_hard"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.HARD_RESET"; 
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["reset_cause_wdt"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.WDT_RESET"; 
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["reset_cause_deep"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.DEEPSLEEP_RESET"; 
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['webrepl_start'] = function(block) {
  Blockly.Python.definitions_['import_webrepl'] = 'import webrepl';
  var code = 'webrepl.start()\n';
  return code;
};

Blockly.Python['webrepl_setup'] = function(block) {
  var code = 'import webrepl_setup\n';
  return code;
};



Blockly.Python['gpio_set'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';

  var code = 'gpio_set(' + value_pin + ', ' + value_value + ')\n';
  return code;

};

Blockly.Python['exec_python'] = function(block) {
  var value_command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
  var code = value_command.replace('\'','').replace('\'','') + '\n';
  return code;
};


Blockly.Python['set_freq'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var value_command = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var code = 'machine.freq(' + value_command + ')\n';
  return code;
};


Blockly.Python['get_freq'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = 'machine.freq()';
  return [code, Blockly.Python.ORDER_NONE];
};




Blockly.Python['exec_python_output'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
  var value_command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
  var code = value_command.replace('\'','').replace('\'','') + '\n';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['run_cmd'] = function(block) {
  var value_command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_os'] = 'import os';
  var code = 'os.system(' + value_command + ')' + '\n';
  return code;
};

Blockly.Python['play_mp3'] = function(block) {
  var value_command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_os'] = 'import os';
  var code = 'os.system(\'mpg123 ' + value_command + '\')';
  var code = 'os.system(\'mpg123 ' + value_command.replace('\'','').replace('\'','') + '\') \n';
  return code;
};

Blockly.Python['esp32_adc'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  var dropdown_attenuation = block.getFieldValue('Attenuation');
  var dropdown_width__ = block.getFieldValue('Width: ');

  var atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==0)
                  atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==1)
                  atten = 'ADC.ATTN_2_5DB';
  if (dropdown_attenuation==2)
                  atten = 'ADC.ATTN_6DB';
  if (dropdown_attenuation==3)
                  atten = 'ADC.ATTN_11DB';

  var w = 'ADC.WIDTH_10BIT';
  if (dropdown_width__==0)
        w = 'ADC.WIDTH_9BIT';
  if (dropdown_width__==1)
        w = 'ADC.WIDTH_10BIT';
  if (dropdown_width__==2)
        w = 'ADC.WIDTH_11BIT';
  if (dropdown_width__==3)
        w = 'ADC.WIDTH_12BIT';


  Blockly.Python.definitions_['init_adc' + x] = 'adc' + x + '=ADC(Pin(' + x + '))\nadc' + x + '.atten(' + atten + ')\nadc' + x + '.width(' + w + ')\n';

  var code = 'adc' + x + '.read()';
  return [code, Blockly.Python.ORDER_NONE];
};




Blockly.Python['adc_pico'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  // var value_pin = Blockly.Python.valueToCode(block, 'ad_pin', Blockly.Python.ORDER_ATOMIC);
  var x = block.getFieldValue('AD_PIN');
  // var x = value_pin.replace('(','').replace(')','');

  Blockly.Python.definitions_['init_adc' + x] = 'adc' + x + '=ADC(' + x + ')';

  var code = 'adc' + x + '.read_u16()';
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['adc'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_[`init_adc_${value_pin}`] = 'adc' + value_pin + '=ADC(' + value_pin + ')';
  var code = 'adc' + value_pin + '.read()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gpio_get'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var x = value_pin.replace('(','').replace(')','');

  Blockly.Python.definitions_[`gpio_get_${x}`] = 'pIn' + x + '=Pin(' + x + ', Pin.IN)\n\n';

  var code = 'pIn' + x + '.value()';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gpio_interrupt'] = function(block) {

  // Fix for global variables inside callback
  // Piece of code from generators/python/procedures.js
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; (variable = variables[i]); i++) {
    var varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.nameDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  var dropdown_trigger = block.getFieldValue('trigger');
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  var value_pin = value_pin.replace('(','').replace(')','');

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

  if (dropdown_trigger == 'BOTH')
	dropdown_trigger = 'IRQ_RISING | Pin.IRQ_FALLING';

  var code='';
  if (value_pin) {
	// code = '\n#BIPES Interrupt handler\ndef callback' + value_pin + '(pPin):\n' + statements_code + '#End of BIPES Interrupt handler\n\n';
	// code += 'p' + value_pin + ' = Pin(' + value_pin + ', Pin.IN)\n';
	// code += 'p' + value_pin + '.irq(trigger=Pin.' + dropdown_trigger + ', handler=callback' + value_pin + ')\n';

  Blockly.Python.definitions_[`gpio_interrupt${value_pin}`] = `\n#Interrupt handler\ndef callback${value_pin}(pPin):\n${globals}${statements_code}\n\n`;

  code = `p${value_pin} = Pin(${value_pin}, Pin.IN)\n`;
  code += `p${value_pin}.irq(trigger=Pin.${dropdown_trigger}, handler=callback${value_pin})\n`;

  }

  return code;
};

Blockly.Python['gpio_interrupt_off'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  var value_pin = value_pin.replace('(','').replace(')','');
  var code='';

  if (value_pin)
	  code = 'p' + value_pin + '.irq(trigger=0, handler=callback' + value_pin + ')\n';

  return code;
};


/// Pinout
Blockly.Python['pinout'] = function(block) {
  var pin = block.getFieldValue('PIN');
  
  return [pin, Blockly.Python.ORDER_NONE];
};

/// Convert to Str
Blockly.Python['text_to_str'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var code = 'str(' + variable + ')';

  return [code, Blockly.Python.ORDER_NONE];
};

/// Decode Bytes to Str
Blockly.Python['decode_bytes_to_text'] = function(block) {
	var variable = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
	var code =  variable + '.decode()';

	return [code, Blockly.Python.ORDER_NONE];
};

/// Convert to Int
Blockly.Python['var_to_int'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var code = 'int(' + variable + ')';

  return [code, Blockly.Python.ORDER_NONE];
};
/// Convert to Float
Blockly.Python['var_to_float'] = function(block) {
	var variable = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
	var code = 'float(' + variable + ')';
  
	return [code, Blockly.Python.ORDER_NONE];
};

//OneWire

Blockly.Python['onewire_ds18x20_init'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_onewire'] = 'import onewire,ds18x20';

  var code = 'onewire_pin = Pin(' + pin + ')\n';
      code += 'ds = ds18x20.DS18X20(onewire.OneWire(onewire_pin))\n';

  return code;
};


Blockly.Python['onewire_ds18x20_scan'] = function(block) {
  var code = 'ds.scan()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['onewire_ds18x20_convert'] = function(block) {
  var code = 'ds.convert_temp()\n';
  return code;
};

Blockly.Python['onewire_ds18x20_read_temp'] = function(block) {
  var rom = Blockly.Python.valueToCode(block, 'rom', Blockly.Python.ORDER_ATOMIC);
  var code = 'ds.read_temp(' + rom + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

//MPU6050

Blockly.Python['init_mpu6050'] = function(block) {
  // var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  // var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_imu'] = 'import imu';

//  var code = 'i2c=I2C(-1, scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
 //     code += 'oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n';
    var code = "imu.init_MPU()\nimu.calibrate_sensors()\n";

  return code;
};


Blockly.Python['mpu6050_read_acc_x'] = function(block) {
  var code = 'imu.read_mpu6050v(1)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_acc_y'] = function(block) {
  var code = 'imu.read_mpu6050v(2)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_acc_z'] = function(block) {
  var code = 'imu.read_mpu6050v(3)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_gyro_x'] = function(block) {
  var code = 'imu.read_mpu6050v(4)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_gyro_y'] = function(block) {
  var code = 'imu.read_mpu6050v(5)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_gyro_z'] = function(block) {
  var code = 'imu.read_mpu6050v(6)';
  return [code, Blockly.Python.ORDER_NONE];
};

//End of MPU6050

//VL53L0

Blockly.Python['init_vl53l0'] = function(block) {
  // var sda = Blockly.Python.valueToCode(block, 'i2c_pin', Blockly.Python.ORDER_ATOMIC);
  var i2c_pin = block.getFieldValue('i2c_pin');
  var pn = i2c_pin.split(',');

  Blockly.Python.definitions_['import_vl53l0x'] = 'from vl53l0x import vl53l0x';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin,I2C';
  Blockly.Python.definitions_['i2c_set'] = `i2c=I2C(${pn[0]},scl=Pin(${pn[1]}),sda=Pin(${pn[2]}),freq=400000)`;
  // Blockly.Python.definitions_['i2c_set'] = `i2c=I2C(0,scl=Pin(${scl}),sda=Pin(${sda}),freq=400000)`;

  Blockly.Python.definitions_['tof_set'] = 'tof=vl53l0x(i2c)';

//  var code = 'i2c=I2C(-1, scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
 //     code += 'oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n';
    var code = "";

  return code;
};

Blockly.Python['vl53l0_read_distance'] = function(block) {
  var code = 'tof.measure()';
  return [code, Blockly.Python.ORDER_NONE];
};

//End VL53L0

Blockly.Python['init_oled'] = function(block) {
  var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);
  var i2c = Blockly.Python.valueToCode(block, 'i2c', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_oled_a'] = 'from machine import I2C';
  Blockly.Python.definitions_['import_ssd'] = 'import ssd1306';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';

  var code = 'i2c=I2C(' + i2c + ', scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
      code += 'oled_width = 128\n';
      code += 'oled_height = 64\n';
      code += 'oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n';

  return code;
};

Blockly.Python['clear_oled'] = function(block) {
  var code = 'oled.fill(0)\n';
  return code;
};

Blockly.Python['fill_oled'] = function(block) {
  var v = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = 'oled.fill(' + v + ')\n';
  return code;
};

Blockly.Python['show_oled'] = function(block) {
  var code = 'oled.show()\n';
  return code;
};

Blockly.Python['write_oled'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var t = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);

  var code = 'oled.text(' + t + ', ' + x + ', ' + y + ')\noled.show()\n';
  return code;
};

Blockly.Python['init_tank'] = function(block) {
  var Xpos = Blockly.Python.valueToCode(block, 'Xpos', Blockly.Python.ORDER_ATOMIC);
  var Ypos = Blockly.Python.valueToCode(block, 'Ypos', Blockly.Python.ORDER_ATOMIC);
  var Angle = Blockly.Python.valueToCode(block, 'Angle', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_tank'] = 'import tank';
	
  var code = 'tank1 = tank.Tank(' + Xpos + ',' + Ypos + ',' + Angle + ', oled, oled_width, oled_height, i2c)   # uses 3 variables; X position, Y position, Start Angle\n';

  return code;
};

Blockly.Python['tank_move'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var value_move = Blockly.Python.valueToCode(block, 'Move', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tank1.move(' + value_move + ', 1)\n';	
  if (dropdown_option === 'TankPrime') {
  	code = 'tank1.move(' + value_move + ', 2)\n';
  } else if (dropdown_option === 'TankJump') {
  	code = 'tank1.move(' + value_move + ', 0)\n';
  }
  return code;
};

Blockly.Python['tank_turn'] = function(block) {
  var angle_tank_angle = block.getFieldValue('Tank_Angle');
  // TODO: Assemble JavaScript into code variable.
  var code = 'tank1.turn(' + angle_tank_angle + ')\n';
  return code;
};

Blockly.Python['init_servo'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  // var code = 'pservo = Pin(' + pin + ')\n';
  //     code += 'servo = PWM(pservo,freq=50)\n';

  var code = `servo${pin} = PWM(Pin(${pin}))\nservo${pin}.freq(50)\n`;

  return code;
};

Blockly.Python['move_servo'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_NONE);

  var code = 'angle_deg = ' + value_angle + '\n';
  code += 'if (angle_deg > 180):\n';
  code += '  angle_deg = 180\n'
  code += 'if (angle_deg < 0):\n';
  code += '  angle_deg = 0\n';
  code += 'angle_u16 = int((angle_deg * 9.5 / 180 + 2.5) * 65535 / 100)\n';
  code += `servo${pin}.duty_u16(angle_u16)\n`;
  return code;
};

Blockly.Python['net_get_request'] = function(block) {
  var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_urequests'] = 'import urequests';
  var code = 'urequests.get(' + value_url + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['net_post_request'] = function(block) {
  var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);
  var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_urequests'] = 'import urequests';
  var code = 'urequests.post(\"' + value_url + '\", data = \"' + value_url + '\")\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['net_ifconfig'] = function(block) {
  Blockly.Python.definitions_['import_network'] = 'import network';
  Blockly.Python.definitions_['import_network_a'] = 'sta_if = network.WLAN(network.STA_IF)';
  Blockly.Python.definitions_['import_network_b'] = 'sta_if.active(True)';

  var code = 'sta_if.ifconfig()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['net_ap_mode'] = function(block) {
  var value_wifi_essid = Blockly.Python.valueToCode(block, 'wifi_essid', Blockly.Python.ORDER_ATOMIC);
  var value_wifi_key = Blockly.Python.valueToCode(block, 'wifi_key', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_network'] = 'import network';
  var code = 'ap = network.WLAN(network.AP_IF) \nap.active(True) \nap.config(essid=' + value_wifi_essid + ', password=' + value_wifi_key + ') \n';
 
  return code;
};

Blockly.Python['wifi_client_connect'] = function(block) {
  var value_wifi_client_essid = Blockly.Python.valueToCode(block, 'wifi_client_essid', Blockly.Python.ORDER_ATOMIC);
  var value_wifi_client_key = Blockly.Python.valueToCode(block, 'wifi_client_key', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_network'] = 'import network';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'sta_if = network.WLAN(network.STA_IF); sta_if.active(True) \nsta_if.scan() \nsta_if.connect(' + value_wifi_client_essid + ',' + value_wifi_client_key + ') \nprint("Waiting for Wifi connection")\nwhile not sta_if.isconnected(): time.sleep(1)\nprint("Connected")\n';
  return code;
};

Blockly.Python['wifi_client_scan_networks'] = function(block) {
  Blockly.Python.definitions_['import_network'] = 'import network';
  var code = 'sta_if.scan()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/// DHT11/22
/// Start DHT Sensor
Blockly.Python['dht_init'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var type = block.getFieldValue('DHT_TYPE');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'dhts=dht.' + type + '(Pin(' + value_pin + '));dhts.measure();time.sleep(2)\n';
  return code;
};

/// Measure DHT11/22 Sensor
Blockly.Python['dht_measure'] = function(block) {
  var code = 'dhts.measure()\n';
  return code;
};

/// Read DHT11/22 Temperature
Blockly.Python['dht_read_temp'] = function(block) {
  var code = 'dhts.temperature()';
  return [code, Blockly.Python.ORDER_NONE];
};

/// Read DHT11/22 Humidity
Blockly.Python['dht_read_humidity'] = function(block) {
  var code = 'dhts.humidity()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tm1640_init'] = function(block) {
  var clk = Blockly.Python.valueToCode(block, 'clk', Blockly.Python.ORDER_ATOMIC);
  var dio = Blockly.Python.valueToCode(block, 'dio', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_tm1640'] = 'import tm1640';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

  var code = 'tm = tm1640.TM1640(clk=Pin(14), dio=Pin(13))\n';
  return code;
};



Blockly.Python['tm1640_write'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'vector', Blockly.Python.ORDER_ATOMIC);
  var x = pIn.replace('\'','').replace('\'','');
  var code = 'tm.write([' + x + '])\n';
  return code;
};

Blockly.Python['tm1640_brig'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'brig', Blockly.Python.ORDER_ATOMIC);
  var code = 'tm.brightness(' + pIn + ')\n';
  return code;
};

Blockly.Python['tm1640_num'] = function(block) {
  //Reference: https://github.com/mcauser/micropython-tm1640
	//https://github.com/mcauser/micropython-tm1640/blob/master/tm1640_test.py
  var pIn = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var code = 'digits = [0x3c66666e76663c00, 0x7e1818181c181800, 0x7e060c3060663c00, 0x3c66603860663c00, 0x30307e3234383000, 0x3c6660603e067e00, 0x3c66663e06663c00, 0x1818183030667e00, 0x3c66663c66663c00, 0x3c66607c66663c00]\ntm.write_int(digits[' + pIn + '])\n';
  return code;
};

Blockly.Python['tm1640_custom'] = function (block) {
    var checkbox_a0 = block.getFieldValue('A0') == 'TRUE';
    var checkbox_a1 = block.getFieldValue('A1') == 'TRUE';
    var checkbox_a2 = block.getFieldValue('A2') == 'TRUE';
    var checkbox_a3 = block.getFieldValue('A3') == 'TRUE';
    var checkbox_a4 = block.getFieldValue('A4') == 'TRUE';
    var checkbox_a5 = block.getFieldValue('A5') == 'TRUE';
    var checkbox_a6 = block.getFieldValue('A6') == 'TRUE';
    var checkbox_a7 = block.getFieldValue('A7') == 'TRUE';
    var checkbox_b0 = block.getFieldValue('B0') == 'TRUE';
    var checkbox_b1 = block.getFieldValue('B1') == 'TRUE';
    var checkbox_b2 = block.getFieldValue('B2') == 'TRUE';
    var checkbox_b3 = block.getFieldValue('B3') == 'TRUE';
    var checkbox_b4 = block.getFieldValue('B4') == 'TRUE';
    var checkbox_b5 = block.getFieldValue('B5') == 'TRUE';
    var checkbox_b6 = block.getFieldValue('B6') == 'TRUE';
    var checkbox_b7 = block.getFieldValue('B7') == 'TRUE';
    var checkbox_c0 = block.getFieldValue('C0') == 'TRUE';
    var checkbox_c1 = block.getFieldValue('C1') == 'TRUE';
    var checkbox_c2 = block.getFieldValue('C2') == 'TRUE';
    var checkbox_c3 = block.getFieldValue('C3') == 'TRUE';
    var checkbox_c4 = block.getFieldValue('C4') == 'TRUE';
    var checkbox_c5 = block.getFieldValue('C5') == 'TRUE';
    var checkbox_c6 = block.getFieldValue('C6') == 'TRUE';
    var checkbox_c7 = block.getFieldValue('C7') == 'TRUE';
    var checkbox_d0 = block.getFieldValue('D0') == 'TRUE';
    var checkbox_d1 = block.getFieldValue('D1') == 'TRUE';
    var checkbox_d2 = block.getFieldValue('D2') == 'TRUE';
    var checkbox_d3 = block.getFieldValue('D3') == 'TRUE';
    var checkbox_d4 = block.getFieldValue('D4') == 'TRUE';
    var checkbox_d5 = block.getFieldValue('D5') == 'TRUE';
    var checkbox_d6 = block.getFieldValue('D6') == 'TRUE';
    var checkbox_d7 = block.getFieldValue('D7') == 'TRUE';
    var checkbox_e0 = block.getFieldValue('E0') == 'TRUE';
    var checkbox_e1 = block.getFieldValue('E1') == 'TRUE';
    var checkbox_e2 = block.getFieldValue('E2') == 'TRUE';
    var checkbox_e3 = block.getFieldValue('E3') == 'TRUE';
    var checkbox_e4 = block.getFieldValue('E4') == 'TRUE';
    var checkbox_e5 = block.getFieldValue('E5') == 'TRUE';
    var checkbox_e6 = block.getFieldValue('E6') == 'TRUE';
    var checkbox_e7 = block.getFieldValue('E7') == 'TRUE';
    var checkbox_f0 = block.getFieldValue('F0') == 'TRUE';
    var checkbox_f1 = block.getFieldValue('F1') == 'TRUE';
    var checkbox_f2 = block.getFieldValue('F2') == 'TRUE';
    var checkbox_f3 = block.getFieldValue('F3') == 'TRUE';
    var checkbox_f4 = block.getFieldValue('F4') == 'TRUE';
    var checkbox_f5 = block.getFieldValue('F5') == 'TRUE';
    var checkbox_f6 = block.getFieldValue('F6') == 'TRUE';
    var checkbox_f7 = block.getFieldValue('F7') == 'TRUE';
    var checkbox_g0 = block.getFieldValue('G0') == 'TRUE';
    var checkbox_g1 = block.getFieldValue('G1') == 'TRUE';
    var checkbox_g2 = block.getFieldValue('G2') == 'TRUE';
    var checkbox_g3 = block.getFieldValue('G3') == 'TRUE';
    var checkbox_g4 = block.getFieldValue('G4') == 'TRUE';
    var checkbox_g5 = block.getFieldValue('G5') == 'TRUE';
    var checkbox_g6 = block.getFieldValue('G6') == 'TRUE';
    var checkbox_g7 = block.getFieldValue('G7') == 'TRUE';
    var checkbox_h0 = block.getFieldValue('H0') == 'TRUE';
    var checkbox_h1 = block.getFieldValue('H1') == 'TRUE';
    var checkbox_h2 = block.getFieldValue('H2') == 'TRUE';
    var checkbox_h3 = block.getFieldValue('H3') == 'TRUE';
    var checkbox_h4 = block.getFieldValue('H4') == 'TRUE';
    var checkbox_h5 = block.getFieldValue('H5') == 'TRUE';
    var checkbox_h6 = block.getFieldValue('H6') == 'TRUE';
    var checkbox_h7 = block.getFieldValue('H7') == 'TRUE';

    var line1 = Number(checkbox_a0) * 2**0 + Number(checkbox_a1) * 2**1 + Number(checkbox_a2) * 2**2 + Number(checkbox_a3) * 2**3 + Number(checkbox_a4) * 2**4 + Number(checkbox_a5) * 2**5 + Number(checkbox_a6) * 2**6 + Number(checkbox_a7) * 2**7;
    var line2 = Number(checkbox_b0) * 2**0 + Number(checkbox_b1) * 2**1 + Number(checkbox_b2) * 2**2 + Number(checkbox_b3) * 2**3 + Number(checkbox_b4) * 2**4 + Number(checkbox_b5) * 2**5 + Number(checkbox_b6) * 2**6 + Number(checkbox_b7) * 2**7;
    var line3 = Number(checkbox_c0) * 2**0 + Number(checkbox_c1) * 2**1 + Number(checkbox_c2) * 2**2 + Number(checkbox_c3) * 2**3 + Number(checkbox_c4) * 2**4 + Number(checkbox_c5) * 2**5 + Number(checkbox_c6) * 2**6 + Number(checkbox_c7) * 2**7;
    var line4 = Number(checkbox_d0) * 2**0 + Number(checkbox_d1) * 2**1 + Number(checkbox_d2) * 2**2 + Number(checkbox_d3) * 2**3 + Number(checkbox_d4) * 2**4 + Number(checkbox_d5) * 2**5 + Number(checkbox_d6) * 2**6 + Number(checkbox_d7) * 2**7;
    var line5 = Number(checkbox_e0) * 2**0 + Number(checkbox_e1) * 2**1 + Number(checkbox_e2) * 2**2 + Number(checkbox_e3) * 2**3 + Number(checkbox_e4) * 2**4 + Number(checkbox_e5) * 2**5 + Number(checkbox_e6) * 2**6 + Number(checkbox_e7) * 2**7;
    var line6 = Number(checkbox_f0) * 2**0 + Number(checkbox_f1) * 2**1 + Number(checkbox_f2) * 2**2 + Number(checkbox_f3) * 2**3 + Number(checkbox_f4) * 2**4 + Number(checkbox_f5) * 2**5 + Number(checkbox_f6) * 2**6 + Number(checkbox_f7) * 2**7;
    var line7 = Number(checkbox_g0) * 2**0 + Number(checkbox_g1) * 2**1 + Number(checkbox_g2) * 2**2 + Number(checkbox_g3) * 2**3 + Number(checkbox_g4) * 2**4 + Number(checkbox_g5) * 2**5 + Number(checkbox_g6) * 2**6 + Number(checkbox_g7) * 2**7;
    var line8 = Number(checkbox_h0) * 2**0 + Number(checkbox_h1) * 2**1 + Number(checkbox_h2) * 2**2 + Number(checkbox_h3) * 2**3 + Number(checkbox_h4) * 2**4 + Number(checkbox_h5) * 2**5 + Number(checkbox_h6) * 2**6 + Number(checkbox_h7) * 2**7;


    var code = 'tm.write([' + line8 + ',' + line7 + ',' + line6 + ',' + line5 + ',' + line4 + ',' + line3 + ',' + line2 + ',' + line1 + '])\n';
    return code;
};

/// Relay Switch
Blockly.Python['relay_switch'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var status = block.getFieldValue('RELAY_STATUS');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  if (status == '1'){
  	var code = 'Pin(' + pin + ', Pin.OUT).off()\n';
  }else{
  	var code = 'Pin(' + pin + ', Pin.OUT).on()\n';
  }
  return code;
};

/// EasyMQTT
/// EasyMQTT Init
Blockly.Python['easymqtt_init'] = function(block) {
  var server = '"bipes.net.br"';
  var port = '1883';
  var user = '"bipes"';
  var pass = '"m8YLUr5uW3T"';
  var session = block.getFieldValue('EASYMQTT_SESSION_ID');
  window.easyMQTT_session = session;

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var code = 'easymqtt_session = "' + session + '"; \neasymqtt_client = umqtt.robust.MQTTClient("umqtt_client", server = ' + server + ', port = ' + port + ', user = ' + user + ', password = ' + pass + '); \neasymqtt_client.connect()\nprint("EasyMQTT connected")\n'
  return code;
};

/// EasyMQTT Publish Data
Blockly.Python['easymqtt_publish_data'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'easymqtt_client.publish(easymqtt_session + "/" + ' + topic + ', str(' + data + '))\nprint("EasyMQTT Publish - Session:",easymqtt_session,"Topic:",' + topic + ',"Value:",str(' + data + '))\n'
  return code;
};

/// EasyMQTT Disconnect
Blockly.Python['easymqtt_disconnect'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'easymqtt_client.disconnect()\nprint("EasyMQTT disconnected")\n';
  return code;
};

///EasyMQTT Subscribe
Blockly.Python['easymqtt_subscribe'] = function(block) {
  var var_name = Blockly.Python.nameDB_.getName(
      block.getFieldValue('EASYMQTT_VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  // Fix for global variables inside callback
  // Piece of code from generators/python/procedures.js
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1 && varName != var_name) {
      globals.push(Blockly.Python.nameDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.nameDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var funct_code = Blockly.Python.statementToCode(block, 'do');
  var name = topic.replace(/\W/g, '_');

  var function_name = Blockly.Python.provideFunction_(
    'easymqtt'+name,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '('+var_name+'):',globals,funct_code]);

  Blockly.Python.definitions_['easymqtt_callback'] = 'easymqtt_callback_list = {}\ndef easymqtt_callback(topic_,msg_):\n  topic_=topic_.decode();msg_=msg_.decode()\n  if topic_ in easymqtt_callback_list: easymqtt_callback_list[topic_](float(msg_))';

  var code = "easymqtt_client.set_callback(easymqtt_callback)\neasymqtt_callback_list['"+window.easyMQTT_session+"/' + "+topic+"]="+function_name+"\neasymqtt_client.subscribe('"+window.easyMQTT_session+"/' + "+topic+")\n"
  return code;
};

/// EasyMQTT Receive Data
Blockly.Python['easymqtt_receive_data'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var wait = block.getFieldValue('EASYMQTT_WAIT');
  if (wait == '1'){
    var code = 'easymqtt_client.wait_msg()\n';
  }else{
    var code = 'easymqtt_client.check_msg()\n';
  }
  
  return code;
};



Blockly.Python['mqtt_add_to_buffer'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'fieldname', Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = 'mqtt_buffer += (' + name + ' + "=" + str(' + value + ')) if not len(mqtt_buffer) else ("&" + ' + name + ' + "=" + str(' + value + '))\n'
  return code;
};

/// MQTT
/// Start MQTT Client
Blockly.Python['mqtt_init'] = function(block) {
  var server = Blockly.Python.valueToCode(block, 'server', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var user = Blockly.Python.valueToCode(block, 'user', Blockly.Python.ORDER_ATOMIC);
  var pass = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var code = 'mqtt_buffer = ""; mqtt_client = umqtt.robust.MQTTClient("umqtt_client", server = ' + server + ', port = ' + port + ', user = ' + user + ', password = ' + pass + '); mqtt_client.connect()\n'
  return code;
};

/// Add Data to MQTT Buffer
Blockly.Python['mqtt_add_to_buffer'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'fieldname', Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = 'mqtt_buffer += (' + name + ' + "=" + str(' + value + ')) if not len(mqtt_buffer) else ("&" + ' + name + ' + "=" + str(' + value + '))\n'
  return code;
};

/// Publish Buffer to MQTT Topic
Blockly.Python['mqtt_publish_buffer'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var qos = block.getFieldValue('MQTT_QOS');

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.publish(' + topic + ', mqtt_buffer,qos=' + qos + '); mqtt_buffer = ""\n';
  return code;
};

/// Publish Payload to MQTT Topic
Blockly.Python['mqtt_publish_payload'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var payload = Blockly.Python.valueToCode(block, 'payload', Blockly.Python.ORDER_ATOMIC);
  var qos = block.getFieldValue('MQTT_QOS');

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.publish(' + topic + ', ' + payload + ',qos=' + qos + ')\n';
  return code;
};

/// Set Callback to MQTT Messages
Blockly.Python['mqtt_set_callback'] = function(block) {
	var data_var_name = Blockly.Python.nameDB_.getName(block.getFieldValue('MQTT_DATA_VAR'), Blockly.VARIABLE_CATEGORY_NAME);
	var topic_var_name = Blockly.Python.nameDB_.getName(block.getFieldValue('MQTT_TOPIC_VAR'), Blockly.VARIABLE_CATEGORY_NAME);
	// Fix for global variables inside callback
	// Piece of code from generators/python/procedures.js
	// Add a 'global' statement for every variable that is not shadowed by a local parameter.
	var globals = [];
	var varName;
	var workspace = block.workspace;
	var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
	for (var i = 0, variable; variable = variables[i]; i++) {
		varName = variable.name;
		if (block.getVars().indexOf(varName) == -1 && varName != data_var_name && varName != topic_var_name) {
		globals.push(Blockly.Python.nameDB_.getName(varName,
			Blockly.VARIABLE_CATEGORY_NAME));
		}
	}
	// Add developer variables.
	var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
	for (var i = 0; i < devVarList.length; i++) {
		globals.push(Blockly.Python.nameDB_.getName(devVarList[i],
			Blockly.Names.DEVELOPER_VARIABLE_TYPE));
	}
	globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';
	// End of code from generators/python/procedures.js

	Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

	var funct_code = Blockly.Python.statementToCode(block, 'do');


	var function_name = Blockly.Python.provideFunction_(
		'mqtt_callback',
		['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '('+topic_var_name+','+data_var_name+'):',
		globals,
		Blockly.Python.INDENT + topic_var_name + " = " + topic_var_name + ".decode()",
		funct_code]);

	var code = 'mqtt_client.set_callback(' + function_name + ')\n';
	return code;
};

/// Subscribe to MQTT Topic
Blockly.Python['mqtt_subscribe'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.subscribe(' + topic + ')\n';
  return code;
};

/// Check for MQTT Server messages
Blockly.Python['mqtt_check_msg'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.check_msg()\n';
  return code;
};

/// Wait for MQTT Server messages
Blockly.Python['mqtt_wait_msg'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.wait_msg()\n';
  return code;
};

/// Disconnect MQTT Client
Blockly.Python['mqtt_disconnect'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.disconnect()\n';
  return code;
};

Blockly.Python["btree_open"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "btree.open(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["btree_btree.close"] = function(block) {
		Blockly.Python.definitions_['import_btree'] = 'import btree';
	var code = "btree.btree.close()\n"; 
	return code;
};
Blockly.Python["btree_btree.flush"] = function(block) {
		Blockly.Python.definitions_['import_btree'] = 'import btree';
	var code = "btree.btree.flush()\n"; 
	return code;
};
Blockly.Python["btree_btree.__getitem__"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "btree.btree.__getitem__(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["btree_btree.__iter__"] = function(block) {
		Blockly.Python.definitions_['import_btree'] = 'import btree';
	var code = "btree.btree.__iter__()\n"; 
	return code;
};
Blockly.Python["btree_btree.keys"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "btree.btree.keys(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["builtins_abs"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.abs()\n"; 
	return code;
};
Blockly.Python["builtins_all"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.all()\n"; 
	return code;
};
Blockly.Python["builtins_any"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.any()\n"; 
	return code;
};
Blockly.Python["builtins_bin"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.bin()\n"; 
	return code;
};
Blockly.Python["builtins_callable"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.callable()\n"; 
	return code;
};
Blockly.Python["builtins_chr"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.chr()\n"; 
	return code;
};
Blockly.Python["builtins_classmethod"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.classmethod()\n"; 
	return code;
};
Blockly.Python["builtins_compile"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.compile()\n"; 
	return code;
};
Blockly.Python["builtins_delattr"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "builtins.delattr(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["builtins_dir"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.dir()\n"; 
	return code;
};
Blockly.Python["builtins_divmod"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.divmod()\n"; 
	return code;
};
Blockly.Python["builtins_enumerate"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.enumerate()\n"; 
	return code;
};
Blockly.Python["builtins_eval"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.eval()\n"; 
	return code;
};
Blockly.Python["builtins_exec"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.exec()\n"; 
	return code;
};
Blockly.Python["builtins_filter"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.filter()\n"; 
	return code;
};
Blockly.Python["builtins_getattr"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.getattr()\n"; 
	return code;
};
Blockly.Python["builtins_globals"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.globals()\n"; 
	return code;
};
Blockly.Python["builtins_hasattr"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.hasattr()\n"; 
	return code;
};
Blockly.Python["builtins_hash"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.hash()\n"; 
	return code;
};
Blockly.Python["builtins_hex"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.hex()\n"; 
	return code;
};
Blockly.Python["builtins_id"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.id()\n"; 
	return code;
};
Blockly.Python["builtins_input"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.input()\n"; 
	return code;
};
Blockly.Python["builtins_to_bytes"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "builtins.to_bytes(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["builtins_isinstance"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.isinstance()\n"; 
	return code;
};
Blockly.Python["builtins_issubclass"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.issubclass()\n"; 
	return code;
};
Blockly.Python["builtins_iter"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.iter()\n"; 
	return code;
};
Blockly.Python["builtins_len"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.len()\n"; 
	return code;
};
Blockly.Python["builtins_locals"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.locals()\n"; 
	return code;
};
Blockly.Python["builtins_map"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.map()\n"; 
	return code;
};
Blockly.Python["builtins_max"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.max()\n"; 
	return code;
};
Blockly.Python["builtins_min"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.min()\n"; 
	return code;
};
Blockly.Python["builtins_next"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.next()\n"; 
	return code;
};
Blockly.Python["builtins_oct"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.oct()\n"; 
	return code;
};
Blockly.Python["builtins_open"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.open()\n"; 
	return code;
};
Blockly.Python["builtins_ord"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.ord()\n"; 
	return code;
};
Blockly.Python["builtins_pow"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.pow()\n"; 
	return code;
};
Blockly.Python["builtins_print"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.print()\n"; 
	return code;
};
Blockly.Python["builtins_property"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.property()\n"; 
	return code;
};
Blockly.Python["builtins_range"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.range()\n"; 
	return code;
};
Blockly.Python["builtins_repr"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.repr()\n"; 
	return code;
};
Blockly.Python["builtins_reversed"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.reversed()\n"; 
	return code;
};
Blockly.Python["builtins_round"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.round()\n"; 
	return code;
};
Blockly.Python["builtins_setattr"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.setattr()\n"; 
	return code;
};
Blockly.Python["builtins_sorted"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.sorted()\n"; 
	return code;
};
Blockly.Python["builtins_staticmethod"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.staticmethod()\n"; 
	return code;
};
Blockly.Python["builtins_sum"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.sum()\n"; 
	return code;
};
Blockly.Python["builtins_super"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.super()\n"; 
	return code;
};
Blockly.Python["builtins_type"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.type()\n"; 
	return code;
};
Blockly.Python["builtins_zip"] = function(block) {
		Blockly.Python.definitions_['import_builtins'] = 'import builtins';
	var code = "builtins.zip()\n"; 
	return code;
};
Blockly.Python["cmath_cos"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.cos(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["cmath_exp"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.exp(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["cmath_log"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.log(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["cmath_log10"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.log10(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["cmath_phase"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.phase(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["cmath_polar"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.polar(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["cmath_rect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.rect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["cmath_sin"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.sin(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["cmath_sqrt"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "cmath.sqrt(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["esp32_wake_on_touch"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.wake_on_touch(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_wake_on_ext0"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.wake_on_ext0(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_wake_on_ext1"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.wake_on_ext1(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_raw_temperature"] = function(block) {
		Blockly.Python.definitions_['import_esp32'] = 'import esp32';
	var code = "esp32.raw_temperature()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["esp32_hall_sensor"] = function(block) {
		Blockly.Python.definitions_['import_esp32'] = 'import esp32';
	var code = "esp32.hall_sensor()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["esp32_idf_heap_info"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.idf_heap_info(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_Partition.info"] = function(block) {
		Blockly.Python.definitions_['import_esp32'] = 'import esp32';
	var code = "esp32.Partition.info()\n"; 
	return code;
};
Blockly.Python["esp32_Partition.readblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.Partition.readblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_Partition.readblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.Partition.readblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_Partition.writeblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.Partition.writeblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_Partition.writeblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.Partition.writeblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_Partition.ioctl"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.Partition.ioctl(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_Partition.set_boot"] = function(block) {
		Blockly.Python.definitions_['import_esp32'] = 'import esp32';
	var code = "esp32.Partition.set_boot()\n"; 
	return code;
};
Blockly.Python["esp32_Partition.get_next_update"] = function(block) {
		Blockly.Python.definitions_['import_esp32'] = 'import esp32';
	var code = "esp32.Partition.get_next_update()\n"; 
	return code;
};
Blockly.Python["esp32_RMT.source_freq"] = function(block) {
		Blockly.Python.definitions_['import_esp32'] = 'import esp32';
	var code = "esp32.RMT.source_freq()\n"; 
	return code;
};
Blockly.Python["esp32_RMT.clock_div"] = function(block) {
		Blockly.Python.definitions_['import_esp32'] = 'import esp32';
	var code = "esp32.RMT.clock_div()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["esp32_RMT.wait_done"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.RMT.wait_done(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_RMT.loop"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.RMT.loop(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_RMT.write_pulses"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.RMT.write_pulses(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_ULP.set_wakeup_period"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.ULP.set_wakeup_period(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_ULP.load_binary"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.ULP.load_binary(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp32_ULP.run"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp32.ULP.run(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp_sleep_type"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp.sleep_type(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp_deepsleep"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp.deepsleep(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp_flash_id"] = function(block) {
		Blockly.Python.definitions_['import_esp'] = 'import esp';
	var code = "esp.flash_id()\n"; 
	return code;
};
Blockly.Python["esp_flash_size"] = function(block) {
		Blockly.Python.definitions_['import_esp'] = 'import esp';
	var code = "esp.flash_size()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["esp_flash_user_start"] = function(block) {
		Blockly.Python.definitions_['import_esp'] = 'import esp';
	var code = "esp.flash_user_start()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["esp_flash_read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp.flash_read(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp_flash_write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp.flash_write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp_flash_erase"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp.flash_erase(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["esp_set_native_code_location"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "esp.set_native_code_location(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.fill"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.fill(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.pixel"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.pixel(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.hline"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.hline(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.vline"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.vline(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.line"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.line(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.rect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.rect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.fill_rect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.fill_rect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.text"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.text(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.scroll"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.scroll(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["framebuf_FrameBuffer.blit"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "framebuf.FrameBuffer.blit(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["gc_enable"] = function(block) {
		Blockly.Python.definitions_['import_gc'] = 'import gc';
	var code = "gc.enable()\n"; 
	return code;
};
Blockly.Python["gc_disable"] = function(block) {
		Blockly.Python.definitions_['import_gc'] = 'import gc';
	var code = "gc.disable()\n"; 
	return code;
};
Blockly.Python["gc_collect"] = function(block) {
		Blockly.Python.definitions_['import_gc'] = 'import gc';
	var code = "gc.collect()\n"; 
	return code;
};
Blockly.Python["gc_mem_alloc"] = function(block) {
		Blockly.Python.definitions_['import_gc'] = 'import gc';
	var code = "gc.mem_alloc()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["gc_mem_free"] = function(block) {
		Blockly.Python.definitions_['import_gc'] = 'import gc';
	var code = "gc.mem_free()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["gc_threshold"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "gc.threshold(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_power"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_power(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_orient"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_orient(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_brightness"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_brightness(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_i2c_addr"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_i2c_addr(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_uart_baudrate"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_uart_baudrate(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_startup_deco"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_startup_deco(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.save_to_flash"] = function(block) {
		Blockly.Python.definitions_['import_lcd160cr'] = 'import lcd160cr';
	var code = "lcd160cr.LCD160CR.save_to_flash()\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_pixel"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_pixel(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.get_pixel"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.get_pixel(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["lcd160cr_LCD160CR.get_line"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.get_line(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.screen_dump"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.screen_dump(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.screen_load"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.screen_load(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_pos"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_pos(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_text_color"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_text_color(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_font"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_font(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_pen"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_pen(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.erase"] = function(block) {
		Blockly.Python.definitions_['import_lcd160cr'] = 'import lcd160cr';
	var code = "lcd160cr.LCD160CR.erase()\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.dot"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.dot(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.rect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.rect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.rect_outline"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.rect_outline(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.rect_interior"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.rect_interior(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.line"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.line(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.dot_no_clip"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.dot_no_clip(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.rect_no_clip"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.rect_no_clip(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.rect_outline_no_clip"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.rect_outline_no_clip(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.rect_interior_no_clip"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.rect_interior_no_clip(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.line_no_clip"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.line_no_clip(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.poly_dot"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.poly_dot(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.poly_line"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.poly_line(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.touch_config"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.touch_config(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.is_touched"] = function(block) {
		Blockly.Python.definitions_['import_lcd160cr'] = 'import lcd160cr';
	var code = "lcd160cr.LCD160CR.is_touched()\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.get_touch"] = function(block) {
		Blockly.Python.definitions_['import_lcd160cr'] = 'import lcd160cr';
	var code = "lcd160cr.LCD160CR.get_touch()\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_spi_win"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_spi_win(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.fast_spi"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.fast_spi(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["lcd160cr_LCD160CR.show_framebuf"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.show_framebuf(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_scroll"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_scroll(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_scroll_win"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_scroll_win(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_scroll_win_param"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_scroll_win_param(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.set_scroll_buf"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.set_scroll_buf(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.jpeg"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.jpeg(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.jpeg_start"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.jpeg_start(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.jpeg_data"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "lcd160cr.LCD160CR.jpeg_data(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.feed_wdt"] = function(block) {
		Blockly.Python.definitions_['import_lcd160cr'] = 'import lcd160cr';
	var code = "lcd160cr.LCD160CR.feed_wdt()\n"; 
	return code;
};
Blockly.Python["lcd160cr_LCD160CR.reset"] = function(block) {
		Blockly.Python.definitions_['import_lcd160cr'] = 'import lcd160cr';
	var code = "lcd160cr.LCD160CR.reset()\n"; 
	return code;
};
Blockly.Python["machine.ADC_ADC.read_u16"] = function(block) {
		Blockly.Python.definitions_['import_machine.ADC'] = 'import machine.ADC';
	var code = "machine.ADC.ADC.read_u16()\n"; 
	return code;
};
Blockly.Python["machine.ADCWiPy_ADCWiPy.channel"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.ADCWiPy.ADCWiPy.channel(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.ADCWiPy_ADCWiPy.init"] = function(block) {
		Blockly.Python.definitions_['import_machine.ADCWiPy'] = 'import machine.ADCWiPy';
	var code = "machine.ADCWiPy.ADCWiPy.init()\n"; 
	return code;
};
Blockly.Python["machine.ADCWiPy_ADCWiPy.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.ADCWiPy'] = 'import machine.ADCWiPy';
	var code = "machine.ADCWiPy.ADCWiPy.deinit()\n"; 
	return code;
};
Blockly.Python["machine.ADCWiPy_adcchannel"] = function(block) {
		Blockly.Python.definitions_['import_machine.ADCWiPy'] = 'import machine.ADCWiPy';
	var code = "machine.ADCWiPy.adcchannel()\n"; 
	return code;
};
Blockly.Python["machine.ADCWiPy_adcchannel.value"] = function(block) {
		Blockly.Python.definitions_['import_machine.ADCWiPy'] = 'import machine.ADCWiPy';
	var code = "machine.ADCWiPy.adcchannel.value()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.ADCWiPy_adcchannel.init"] = function(block) {
		Blockly.Python.definitions_['import_machine.ADCWiPy'] = 'import machine.ADCWiPy';
	var code = "machine.ADCWiPy.adcchannel.init()\n"; 
	return code;
};
Blockly.Python["machine.ADCWiPy_adcchannel.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.ADCWiPy'] = 'import machine.ADCWiPy';
	var code = "machine.ADCWiPy.adcchannel.deinit()\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.deinit()\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.scan"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.scan()\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.start"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.start()\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.stop"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.stop()\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readinto(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.I2C_I2C.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.readfrom"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.I2C_I2C.readfrom_into"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom_into(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.I2C_I2C.writeto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.writeto(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.writevto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.writevto(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.readfrom_mem"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom_mem(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.readfrom_mem_into"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom_mem_into(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.I2C_I2C.writeto_mem"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.writeto_mem(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Pin.Pin.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.value"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Pin.Pin.value(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.__call__"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Pin.Pin.__call__(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.on"] = function(block) {
		Blockly.Python.definitions_['import_machine.Pin'] = 'import machine.Pin';
	var code = "machine.Pin.Pin.on()\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.off"] = function(block) {
		Blockly.Python.definitions_['import_machine.Pin'] = 'import machine.Pin';
	var code = "machine.Pin.Pin.off()\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.mode"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Pin.Pin.mode(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.pull"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Pin.Pin.pull(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.drive"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Pin.Pin.drive(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Pin_Pin.irq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Pin.Pin.irq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine_reset"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.reset()\n"; 
	return code;
};
Blockly.Python["machine_soft_reset"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.soft_reset()\n"; 
	return code;
};
Blockly.Python["machine_reset_cause"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.reset_cause()"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine_disable_irq"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.disable_irq()\n"; 
	return code;
};
Blockly.Python["machine_enable_irq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.enable_irq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine_freq"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.freq()\n"; 
	return code;
};
Blockly.Python["machine_idle"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.idle()\n"; 
	return code;
};
Blockly.Python["machine_sleep"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.sleep()\n"; 
	return code;
};
Blockly.Python["machine_lightsleep"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.lightsleep(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine_wake_reason"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.wake_reason()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine_unique_id"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.unique_id()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python["machine_time_pulse_us"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.time_pulse_us(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine_rng"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.rng()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.RTC_RTC.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.RTC.RTC.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.RTC_RTC.now"] = function(block) {
		Blockly.Python.definitions_['import_machine.RTC'] = 'import machine.RTC';
	var code = "machine.RTC.RTC.now()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.RTC_RTC.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.RTC'] = 'import machine.RTC';
	var code = "machine.RTC.RTC.deinit()\n"; 
	return code;
};
Blockly.Python["machine.RTC_RTC.alarm"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.RTC.RTC.alarm(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.RTC_RTC.alarm_left"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.RTC.RTC.alarm_left(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.RTC_RTC.cancel"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.RTC.RTC.cancel(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.RTC_RTC.irq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.RTC.RTC.irq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.SD_SD.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SD.SD.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.SD_SD.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.SD'] = 'import machine.SD';
	var code = "machine.SD.SD.deinit()\n"; 
	return code;
};
Blockly.Python["machine.Signal_Signal.value"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Signal.Signal.value(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Signal_Signal.on"] = function(block) {
		Blockly.Python.definitions_['import_machine.Signal'] = 'import machine.Signal';
	var code = "machine.Signal.Signal.on()\n"; 
	return code;
};
Blockly.Python["machine.Signal_Signal.off"] = function(block) {
		Blockly.Python.definitions_['import_machine.Signal'] = 'import machine.Signal';
	var code = "machine.Signal.Signal.off()\n"; 
	return code;
};
Blockly.Python["machine.SPI_SPI.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.SPI_SPI.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.SPI'] = 'import machine.SPI';
	var code = "machine.SPI.SPI.deinit()\n"; 
	return code;
};
Blockly.Python["machine.SPI_SPI.read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.read(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.SPI_SPI.readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.readinto(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.SPI_SPI.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.SPI_SPI.write_readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.write_readinto(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Timer_Timer.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.Timer.Timer.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.Timer_Timer.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.Timer'] = 'import machine.Timer';
	var code = "machine.Timer.Timer.deinit()\n"; 
	return code;
};
Blockly.Python["machine.TimerWiPy_TimerWiPy.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.TimerWiPy.TimerWiPy.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.TimerWiPy_TimerWiPy.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.TimerWiPy'] = 'import machine.TimerWiPy';
	var code = "machine.TimerWiPy.TimerWiPy.deinit()\n"; 
	return code;
};
Blockly.Python["machine.TimerWiPy_TimerWiPy.channel"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.TimerWiPy.TimerWiPy.channel(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.TimerWiPy_timerchannel.irq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.TimerWiPy.timerchannel.irq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.TimerWiPy_timerchannel.freq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.TimerWiPy.timerchannel.freq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.TimerWiPy_timerchannel.period"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.TimerWiPy.timerchannel.period(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.TimerWiPy_timerchannel.duty_cycle"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.TimerWiPy.timerchannel.duty_cycle(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.UART.UART.init(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.UART'] = 'import machine.UART';
	var code = "machine.UART.UART.deinit()\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.any"] = function(block) {
		Blockly.Python.definitions_['import_machine.UART'] = 'import machine.UART';
	var code = "machine.UART.UART.any()\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.UART.UART.read(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.UART.UART.readinto(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.readline"] = function(block) {
		Blockly.Python.definitions_['import_machine.UART'] = 'import machine.UART';
	var code = "machine.UART.UART.readline()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["machine.UART_UART.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.UART.UART.write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.sendbreak"] = function(block) {
		Blockly.Python.definitions_['import_machine.UART'] = 'import machine.UART';
	var code = "machine.UART.UART.sendbreak()\n"; 
	return code;
};
Blockly.Python["machine.UART_UART.irq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.UART.UART.irq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["machine.WDT_wdt.feed"] = function(block) {
		Blockly.Python.definitions_['import_machine.WDT'] = 'import machine.WDT';
	var code = "machine.WDT.wdt.feed()\n"; 
	return code;
};
Blockly.Python["math_acos"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.acos(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_acosh"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.acosh(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_asin"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.asin(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_asinh"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.asinh(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_atan"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.atan(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_atan2"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.atan2(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_atanh"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.atanh(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_ceil"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.ceil(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_copysign"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.copysign(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_cos"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.cos(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_cosh"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.cosh(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_degrees"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.degrees(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_erf"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.erf(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_erfc"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.erfc(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_exp"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.exp(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_expm1"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.expm1(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_fabs"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.fabs(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_floor"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.floor(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_fmod"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.fmod(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_frexp"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.frexp(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["math_gamma"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.gamma(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_isfinite"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.isfinite(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_isinf"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.isinf(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_isnan"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.isnan(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_ldexp"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.ldexp(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_lgamma"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.lgamma(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_log"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.log(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_log10"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.log10(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_log2"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.log2(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_modf"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.modf(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_pow"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.pow(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["math_radians"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.radians(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_sin"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.sin(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_sinh"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.sinh(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_sqrt"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.sqrt(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_tan"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.tan(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_tanh"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.tanh(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["math_trunc"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "math.trunc(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["micropython_const"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "micropython.const(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["micropython_opt_level"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "micropython.opt_level(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["micropython_alloc_emergency_exception_buf"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "micropython.alloc_emergency_exception_buf(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["micropython_mem_info"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "micropython.mem_info(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["micropython_qstr_info"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "micropython.qstr_info(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["micropython_stack_use"] = function(block) {
		Blockly.Python.definitions_['import_micropython'] = 'import micropython';
	var code = "micropython.stack_use()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["micropython_heap_lock"] = function(block) {
		Blockly.Python.definitions_['import_micropython'] = 'import micropython';
	var code = "micropython.heap_lock()\n"; 
	return code;
};
Blockly.Python["micropython_heap_unlock"] = function(block) {
		Blockly.Python.definitions_['import_micropython'] = 'import micropython';
	var code = "micropython.heap_unlock()\n"; 
	return code;
};
Blockly.Python["micropython_heap_locked"] = function(block) {
		Blockly.Python.definitions_['import_micropython'] = 'import micropython';
	var code = "micropython.heap_locked()\n"; 
	return code;
};
Blockly.Python["micropython_kbd_intr"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "micropython.kbd_intr(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["micropython_schedule"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "micropython.schedule(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.active"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "network.AbstractNIC.active(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.connect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "network.AbstractNIC.connect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.disconnect"] = function(block) {
		Blockly.Python.definitions_['import_network'] = 'import network';
	var code = "network.AbstractNIC.disconnect()\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.isconnected"] = function(block) {
		Blockly.Python.definitions_['import_network'] = 'import network';
	var code = "network.AbstractNIC.isconnected()\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.scan"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "network.AbstractNIC.scan(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.status"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "network.AbstractNIC.status(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.ifconfig"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "network.AbstractNIC.ifconfig(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["network_AbstractNIC.config"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "network.AbstractNIC.config(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["network_phy_mode"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "network.phy_mode(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_delay"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.delay(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_udelay"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.udelay(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_millis"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.millis()\n"; 
	return code;
};
Blockly.Python["pyb_micros"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.micros()\n"; 
	return code;
};
Blockly.Python["pyb_elapsed_millis"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.elapsed_millis(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_elapsed_micros"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.elapsed_micros(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_hard_reset"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.hard_reset()\n"; 
	return code;
};
Blockly.Python["pyb_bootloader"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.bootloader()\n"; 
	return code;
};
Blockly.Python["pyb_fault_debug"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.fault_debug(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_disable_irq"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.disable_irq()\n"; 
	return code;
};
Blockly.Python["pyb_enable_irq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.enable_irq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_freq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.freq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_wfi"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.wfi()\n"; 
	return code;
};
Blockly.Python["pyb_stop"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.stop()\n"; 
	return code;
};
Blockly.Python["pyb_standby"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.standby()\n"; 
	return code;
};
Blockly.Python["pyb_have_cdc"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.have_cdc()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["pyb_hid"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.hid(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_info"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.info(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_main"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.main(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_mount"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.mount(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["pyb_repl_uart"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "pyb.repl_uart(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["pyb_rng"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.rng()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["pyb_sync"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.sync()\n"; 
	return code;
};
Blockly.Python["pyb_unique_id"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.unique_id()\n"; 
	return code;
};
Blockly.Python["pyb_usb_mode"] = function(block) {
		Blockly.Python.definitions_['import_pyb'] = 'import pyb';
	var code = "pyb.usb_mode()\n"; 
	return code;
};
Blockly.Python["sys_exit"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "sys.exit(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["sys_atexit"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "sys.atexit(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["sys_print_exception"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "sys.print_exception(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uarray_append"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uarray.append(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uarray_extend"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uarray.extend(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_create_task"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.create_task(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_run"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.run(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_sleep"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.sleep(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_sleep_ms"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.sleep_ms(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_wait_for"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.wait_for(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_gather"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.gather(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_Task.cancel"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Task.cancel()\n"; 
	return code;
};
Blockly.Python["uasyncio_Event.is_set"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Event.is_set()\n"; 
	return code;
};
Blockly.Python["uasyncio_Event.set"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Event.set()\n"; 
	return code;
};
Blockly.Python["uasyncio_Event.clear"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Event.clear()\n"; 
	return code;
};
Blockly.Python["uasyncio_Event.wait"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Event.wait()\n"; 
	return code;
};
Blockly.Python["uasyncio_Lock.locked"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Lock.locked()\n"; 
	return code;
};
Blockly.Python["uasyncio_Lock.acquire"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Lock.acquire()\n"; 
	return code;
};
Blockly.Python["uasyncio_Lock.release"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Lock.release()\n"; 
	return code;
};
Blockly.Python["uasyncio_open_connection"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.open_connection(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_start_server"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.start_server(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_Stream.get_extra_info"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Stream.get_extra_info(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uasyncio_Stream.close"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Stream.close()\n"; 
	return code;
};
Blockly.Python["uasyncio_Stream.wait_closed"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Stream.wait_closed()\n"; 
	return code;
};
Blockly.Python["uasyncio_Stream.read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Stream.read(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uasyncio_Stream.readline"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Stream.readline()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uasyncio_Stream.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Stream.write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_Stream.drain"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Stream.drain()\n"; 
	return code;
};
Blockly.Python["uasyncio_Server.close"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Server.close()\n"; 
	return code;
};
Blockly.Python["uasyncio_Server.wait_closed"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Server.wait_closed()\n"; 
	return code;
};
Blockly.Python["uasyncio_get_event_loop"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.get_event_loop()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uasyncio_new_event_loop"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.new_event_loop()\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.create_task"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Loop.create_task(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.run_forever"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Loop.run_forever()\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.run_until_complete"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Loop.run_until_complete(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.stop"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Loop.stop()\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.close"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Loop.close()\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.set_exception_handler"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Loop.set_exception_handler(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.get_exception_handler"] = function(block) {
		Blockly.Python.definitions_['import_uasyncio'] = 'import uasyncio';
	var code = "uasyncio.Loop.get_exception_handler()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uasyncio_Loop.default_exception_handler"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Loop.default_exception_handler(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uasyncio_Loop.call_exception_handler"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uasyncio.Loop.call_exception_handler(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubinascii_hexlify"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubinascii.hexlify(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubinascii_unhexlify"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubinascii.unhexlify(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubinascii_a2b_base64"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubinascii.a2b_base64(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubinascii_b2a_base64"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubinascii.b2a_base64(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.active"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.active(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.config"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.config(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["ubluetooth_BLE.irq"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.irq(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gap_advertise"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gap_advertise(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gap_scan"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gap_scan(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gatts_register_services"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gatts_register_services(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gatts_read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gatts_read(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["ubluetooth_BLE.gatts_write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gatts_write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gatts_notify"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gatts_notify(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gatts_set_buffer"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gatts_set_buffer(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gap_connect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gap_connect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gap_disconnect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gap_disconnect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gattc_discover_services"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gattc_discover_services(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gattc_discover_characteristics"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gattc_discover_characteristics(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gattc_discover_descriptors"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gattc_discover_descriptors(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gattc_read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gattc_read(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ubluetooth_BLE.gattc_write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ubluetooth.BLE.gattc_write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ucollections_deque"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ucollections.deque(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ucollections_deque.append"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ucollections.deque.append(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ucollections_deque.popleft"] = function(block) {
		Blockly.Python.definitions_['import_ucollections'] = 'import ucollections';
	var code = "ucollections.deque.popleft()\n"; 
	return code;
};
Blockly.Python["ucollections_namedtuple"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ucollections.namedtuple(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ucollections_OrderedDict"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ucollections.OrderedDict(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ucryptolib_encrypt"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ucryptolib.encrypt(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ucryptolib_decrypt"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ucryptolib.decrypt(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uctypes_sizeof"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uctypes.sizeof(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uctypes_addressof"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uctypes.addressof(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uctypes_bytes_at"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uctypes.bytes_at(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uctypes_bytearray_at"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uctypes.bytearray_at(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uhashlib_hash.update"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uhashlib.hash.update(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uhashlib_hash.digest"] = function(block) {
		Blockly.Python.definitions_['import_uhashlib'] = 'import uhashlib';
	var code = "uhashlib.hash.digest()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uhashlib_hash.hexdigest"] = function(block) {
		Blockly.Python.definitions_['import_uhashlib'] = 'import uhashlib';
	var code = "uhashlib.hash.hexdigest()\n"; 
	return code;
};
Blockly.Python["uheapq_heappush"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uheapq.heappush(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uheapq_heappop"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uheapq.heappop(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uheapq_heapify"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uheapq.heapify(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uio_open"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uio.open(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uio_getvalue"] = function(block) {
		Blockly.Python.definitions_['import_uio'] = 'import uio';
	var code = "uio.getvalue()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["ujson_dump"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ujson.dump(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ujson_dumps"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ujson.dumps(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["ujson_load"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ujson.load(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ujson_loads"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ujson.loads(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_uname"] = function(block) {
		Blockly.Python.definitions_['import_uos'] = 'import uos';
	var code = "uos.uname()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uos_urandom"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.urandom(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uos_chdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.chdir(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_getcwd"] = function(block) {
		Blockly.Python.definitions_['import_uos'] = 'import uos';
	var code = "uos.getcwd()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uos_ilistdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.ilistdir(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_listdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.listdir(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_mkdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.mkdir(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_remove"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.remove(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_rmdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.rmdir(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_rename"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.rename(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_stat"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.stat(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uos_statvfs"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.statvfs(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["uos_sync"] = function(block) {
		Blockly.Python.definitions_['import_uos'] = 'import uos';
	var code = "uos.sync()\n"; 
	return code;
};
Blockly.Python["uos_dupterm"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.dupterm(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_mount"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.mount(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_umount"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.umount(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_readblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.readblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_readblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.readblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_writeblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.writeblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_writeblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.writeblocks(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uos_ioctl"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.ioctl(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_compile"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.compile(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_match"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.match(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_search"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.search(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_sub"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.sub(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_regex.match"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.regex.match(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_regex.split"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.regex.split(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_match.group"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.match.group(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["ure_match.groups"] = function(block) {
		Blockly.Python.definitions_['import_ure'] = 'import ure';
	var code = "ure.match.groups()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["ure_match.start"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.match.start(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ure_match.span"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ure.match.span(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uselect_poll"] = function(block) {
		Blockly.Python.definitions_['import_uselect'] = 'import uselect';
	var code = "uselect.poll()\n"; 
	return code;
};
Blockly.Python["uselect_select"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uselect.select(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uselect_poll.register"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uselect.poll.register(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uselect_poll.unregister"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uselect.poll.unregister(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uselect_poll.modify"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uselect.poll.modify(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uselect_poll.poll"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uselect.poll.poll(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["uselect_poll.ipoll"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uselect.poll.ipoll(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_getaddrinfo"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.getaddrinfo(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_inet_ntop"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.inet_ntop(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_inet_pton"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.inet_pton(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.close"] = function(block) {
		Blockly.Python.definitions_['import_usocket'] = 'import usocket';
	var code = "usocket.socket.close()\n"; 
	return code;
};
Blockly.Python["usocket_socket.bind"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.bind(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.listen"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.listen(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.accept"] = function(block) {
		Blockly.Python.definitions_['import_usocket'] = 'import usocket';
	var code = "usocket.socket.accept()\n"; 
	return code;
};
Blockly.Python["usocket_socket.connect"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.connect(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.send"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.send(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.sendall"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.sendall(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.recv"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.recv(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.sendto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.sendto(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.recvfrom"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.recvfrom(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.setsockopt"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.setsockopt(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.settimeout"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.settimeout(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.setblocking"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.setblocking(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.makefile"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.makefile(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["usocket_socket.read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.read(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.readinto(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["usocket_socket.readline"] = function(block) {
		Blockly.Python.definitions_['import_usocket'] = 'import usocket';
	var code = "usocket.socket.readline()\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["usocket_socket.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "usocket.socket.write(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ussl_ussl.wrap_socket"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ussl.ussl.wrap_socket(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ustruct_calcsize"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ustruct.calcsize(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["ustruct_pack"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ustruct.pack(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ustruct_pack_into"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ustruct.pack_into(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ustruct_unpack"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ustruct.unpack(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["ustruct_unpack_from"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "ustruct.unpack_from(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["utime_localtime"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.localtime(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["utime_mktime"] = function(block) {
		Blockly.Python.definitions_['import_utime'] = 'import utime';
	var code = "utime.mktime()\n"; 
	return code;
};
Blockly.Python["utime_sleep"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.sleep(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["utime_sleep_ms"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.sleep_ms(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["utime_sleep_us"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.sleep_us(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["utime_ticks_ms"] = function(block) {
		Blockly.Python.definitions_['import_utime'] = 'import utime';
	var code = "utime.ticks_ms()\n"; 
	return code;
};
Blockly.Python["utime_ticks_us"] = function(block) {
		Blockly.Python.definitions_['import_utime'] = 'import utime';
	var code = "utime.ticks_us()\n"; 
	return code;
};
Blockly.Python["utime_ticks_cpu"] = function(block) {
		Blockly.Python.definitions_['import_utime'] = 'import utime';
	var code = "utime.ticks_cpu()\n"; 
	return code;
};
Blockly.Python["utime_ticks_add"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.ticks_add(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["utime_ticks_diff"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.ticks_diff(" + value_pIn + ")\n"; 
	return code;
};
Blockly.Python["utime_time"] = function(block) {
		Blockly.Python.definitions_['import_utime'] = 'import utime';
	var code = "utime.time()\n"; 
	return code;
};
Blockly.Python["uzlib_decompress"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uzlib.decompress(" + value_pIn + ")\n"; 
	return [code, Blockly.JavaScript.ORDER_NONE]; 
};
Blockly.Python["wipy_heartbeat"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "wipy.heartbeat(" + value_pIn + ")\n"; 
	return code;
};

//Rafael - From OpenCV
//https://github.com/rafaelaroca/blockly-cv2

Blockly.Blocks['none'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("None")
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['none'] = function(block) {
  var code = "None";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['tostr'] = {
  init: function() {
    this.setColour(65);
    this.appendValueInput("input")
        .appendField("to String")
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};
Blockly.Python['tostr'] = function(block) {
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var code = "str(" + input + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['copy'] = {
  init: function() {
    this.setColour(45);
    this.appendValueInput("image")
        .setCheck("image")
        .appendField("copy");
    this.setOutput(true, "image")
    this.setInputsInline(true)
    this.setTooltip('')
  }
};
Blockly.Python['copy'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = image + ".copy()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['convertTo'] = {
  init: function() {
    this.setColour(45);
    this.appendValueInput("input")
        .setCheck("image")
        .appendField("convertTo")
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["float","np.float32"],
          ["uchar","np.uint8"],
          ["int", "np.int32"],]), "flag")
    this.setOutput(true, "image")
    this.setInputsInline(true)
    this.setTooltip('')
  }
};
Blockly.Python['convertTo'] = function(block) {
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var flag = block.getFieldValue('flag');
  var code = "np.asarray(" + input + ", dtype="+flag+")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['roi'] = {
  init: function() {
    this.setColour(45);
    this.appendValueInput("input")
        .setCheck("image");
    this.appendDummyInput()
        .appendField("roi")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput(""), "y0")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "y1")
        .appendField("x")
        .appendField(new Blockly.FieldTextInput(""), "x0")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "x1");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['roi'] = function(block) {
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var y0 = block.getFieldValue('y0');
  var y1 = block.getFieldValue('y1');
  var x0 = block.getFieldValue('x0');
  var x1 = block.getFieldValue('x1');
  var code = input + "[int(" + y0 + "):int(" + y1 + "),int(" + x0 + "):int(" + x1 + ")]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['indexed'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("indexed")
    this.appendValueInput("input")
        .setCheck("image");
    this.appendValueInput("index")
        .appendField("index");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['indexed'] = function(block) {
  var index = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var code = input + "[" + index + "]";
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks['lists_append'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("append")
    this.appendValueInput("list")
    this.appendValueInput("item")
        .appendField("item")
    this.setInputsInline(true);
    this.setTooltip('append items to a list');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Python['lists_append'] = function(block) {
  var list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var item = Blockly.Python.valueToCode(block, 'item', Blockly.Python.ORDER_ATOMIC);
  var code = list + ".append(" + item + ")\n";
  return code;
};

Blockly.Blocks['imgsize'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("imgsize")
    this.appendValueInput("image")
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['imgsize'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = "np.shape(" + image + ")[:2]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['load'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("load")
        .appendField(new Blockly.FieldVariable('image'), 'image')
        .appendField(new Blockly.FieldTextInput("media/lena.jpg"), "filename")
        .appendField("gray")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "grey");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function(){return [this.getFieldValue('image')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('image'))){this.setFieldValue(newName,'image');}},
};
Blockly.Python['load'] = function(block) {
  var img = block.getFieldValue('image');
  var filename = block.getFieldValue('filename');
  var grey = block.getFieldValue('grey') == 'TRUE';
  var flag = grey ? 0 : 1;
  var code = img + " = cv2.imread('" + filename + "'," + flag + ")\n";
  return code;
};

Blockly.Blocks['imshow'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("imshow")
        //.appendField(new Blockly.FieldVariable('mywin'), 'windowname')
        .appendField(new Blockly.FieldTextInput("mywin"), "windowname");
    this.appendValueInput("image")
        .setCheck("image");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['imshow'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var windowname = block.getFieldValue('windowname');
  var code = "cv2.imshow('" + windowname + "',"+ image +")\r\n";
  return code;
};

Blockly.Blocks['waitkey'] = {
  init: function() {
    this.setColour(45);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("waitKey");
    this.appendDummyInput()
        .appendField("millis")
        .appendField(new Blockly.FieldTextInput("0"), "millis");
    this.appendDummyInput()
        .appendField("key")
        .appendField(new Blockly.FieldTextInput("27"), "key");
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['waitkey'] = function(block) {
  var m = block.getFieldValue('millis');
  var k = block.getFieldValue('key');
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "if cv2.waitKey("+m+")&0xff == "+k+":\n"+s;
  //return [code, Blockly.Python.ORDER_NONE];
  return code;
};

Blockly.Blocks['onmouse'] = {
  init: function() {
    this.setColour(45);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("onmouse")
        .appendField(new Blockly.FieldVariable('mywin'), 'windowname')
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField(new Blockly.FieldVariable('x'), 'x')
        .appendField(new Blockly.FieldVariable('y'), 'y')
        .appendField(new Blockly.FieldVariable('state'), 'state');
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [
      this.getFieldValue('windowname'),
      this.getFieldValue('button'),
      this.getFieldValue('x'),
      this.getFieldValue('y'),
      this.getFieldValue('state')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('windowname'))) { this.setFieldValue(newName, 'windowname'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('button'))) { this.setFieldValue(newName, 'button'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('x'))) { this.setFieldValue(newName, 'x'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('y'))) { this.setFieldValue(newName, 'y'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('state'))) { this.setFieldValue(newName, 'state'); }
  },
};
Blockly.Python['onmouse'] = function(block) {
  var w = block.getFieldValue('windowname');
  var k = block.getFieldValue('key');
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "def onmouse(button, x, y, state, param):\n" +s + "\n" + "cv2.setMouseCallback('"+w+"', onmouse)\n";
  return code;
};

Blockly.Blocks['cascade'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("create")
        .appendField(new Blockly.FieldVariable('cascade'), 'cascade')
        .appendField(new Blockly.FieldTextInput("opencv/data/haarcascades/haarcascade_frontalface_alt2.xml"), "xmlfile");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('cascade')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('cascade'))) {
      this.setFieldValue(newName, 'cascade');
    }
  },
};
Blockly.Python['cascade'] = function(block) {
  var text_input = block.getFieldValue('xmlfile');
  var cascade = block.getFieldValue('cascade');
  var code = cascade + " = cv2.CascadeClassifier('"+text_input+"')\n" +
             "if "+cascade+".empty(): raise Exception(\"your cascade is empty. are you sure, the path is correct ?\")\n"
  return code;
};

Blockly.Blocks['findobjects'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("detect")
        .appendField(new Blockly.FieldVariable('cascade'), 'cascade');
    this.appendValueInput("image")
        .setCheck("image");
    this.setOutput(true);
    this.setTooltip('find objects in an image and return a list of rects.\nto draw them, you will need the tl and br items');
  },
  getVars: function() {
    return [this.getFieldValue('cascade')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('cascade'))) {
      this.setFieldValue(newName, 'cascade');
    }
  },
};
Blockly.Python['findobjects'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var cascade = block.getFieldValue('cascade');
  var code = "cascade.detectMultiScale("+image+")"
  return [code, Blockly.Python.ORDER_NONE];
};

/*
Blockly.Blocks['people'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
        .appendField("create")
        .appendField(new Blockly.FieldVariable('people'), 'people');
    this.setTooltip('create an peopledetector object');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
  getVars: function() {
    return [this.getFieldValue('people')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('people'))) {
      this.setFieldValue(newName, 'people');
    }
  },
};
Blockly.Python['people'] = function(block) {
  var people = block.getFieldValue('people');
  var code = people + " = cv2.HOGDescriptor()\n" +
             people + ".setSVMDetector( cv2.HOGDescriptor_getDefaultPeopleDetector() )\n"
  return code;
};

Blockly.Blocks['peopledetect'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
        .appendField("detect");
    this.appendValueInput("image")
        .setCheck("image")
        .appendField(new Blockly.FieldVariable('people'), 'people');
    this.setOutput(true);
    this.setTooltip('find people in an image, return a list of bounding boxes');
  },
  getVars: function() {
    return [this.getFieldValue('people')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('people'))) {
      this.setFieldValue(newName, 'people');
    }
  },
};
Blockly.Python['peopledetect'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var people = block.getFieldValue('people');
  var code = people + ".detect("+image+")[0]"
  return [code, Blockly.Python.ORDER_NONE];
};
*/


Blockly.Blocks['videocapture'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("VideoCapture")
        .appendField(new Blockly.FieldTextInput("0"), "input")
        .appendField(new Blockly.FieldTextInput("img"), "img")
        //.appendField(new Blockly.FieldVariable('img'), 'img');
    this.appendStatementInput("statements")
        .setCheck("image");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('img')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('img'))) {
      this.setFieldValue(newName, 'img');
    }
  },
};
Blockly.Python['videocapture'] = function(block) {
	/*
  var text_input = block.getFieldValue('input');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  var img_name = block.getFieldValue('img');
  var code = "cap=cv2.VideoCapture("+text_input+")\n" +
             "if not cap.isOpened(): raise Exception(\"your input:"+text_input+" could not be opened !\")\n" +
             "while cap.isOpened():\n  r,"+img_name+"=cap.read()\n  if r==False: break\n"+statements_name;
	     */


  Blockly.Python.definitions_['import_cv2'] = 'import cv2 \nimport numpy as np';

  var text_input = block.getFieldValue('input');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  var img_name = block.getFieldValue('img');

  var code = "cap=cv2.VideoCapture("+text_input+")\n" +
             "if not cap.isOpened(): raise Exception(\"your input:"+text_input+" could not be opened !\")\n" +
             "while cap.isOpened():\n  r,"+img_name+"=cap.read()\n  if r==False: break\n"+statements_name;


  return code;
};




Blockly.Blocks['VideoWriter_VideoWriter'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoWriter')
        .appendField(new Blockly.FieldVariable('writer'), 'writer');
    this.appendDummyInput()
        .appendField('filename')
        .appendField(new Blockly.FieldTextInput('my.asf'), 'filename')
    this.appendDummyInput()
        .appendField('fourcc')
        .appendField(new Blockly.FieldTextInput('XVID'), 'fourcc')
    this.appendDummyInput()
        .appendField('fps')
        .appendField(new Blockly.FieldTextInput('24'), 'fps');
    this.appendValueInput('frameSize')
        .appendField('frameSize')
        .setCheck('size');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('videoio_VideoWriter_VideoWriter');
  },
  getVars: function() {
    return [this.getFieldValue('writer')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('writer'))) {
      this.setFieldValue(newName, 'writer');
    }
  },
};
Blockly.Blocks['VideoWriter_write'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('write')
        .appendField(new Blockly.FieldVariable('writer'), 'writer');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('videoio_VideoWriter_write');
  },
  getVars: function() {
    return [this.getFieldValue('writer')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('writer'))) {
      this.setFieldValue(newName, 'writer');
    }
  },
};


Blockly.Python['VideoWriter_VideoWriter'] = function(block) {
  var writer = block.getFieldValue('writer');
  var filename = block.getFieldValue('filename')
  var fourcc = block.getFieldValue('fourcc')
  var fps = block.getFieldValue('fps');
  var frameSize = Blockly.Python.valueToCode(block, 'frameSize', Blockly.Python.ORDER_ATOMIC);
  var code = writer + " = cv2.VideoWriter('"+filename+"',"+"cv2.VideoWriter_fourcc(*'"+fourcc+"')"+","+fps+","+frameSize+")\n"
  code += "if not " + writer + ".isOpened(): raise Exception(\"your writer failed to open!\")\n"
  return code;
};
Blockly.Python['VideoWriter_write'] = function(block) {
  var that = block.getFieldValue('writer');
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = that + ".write("+image+")\n"
  return code;
};

Blockly.Blocks['cvtcolor'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["BGR2GRAY","cv2.COLOR_BGR2GRAY"],
          ["GRAY2BGR","cv2.COLOR_GRAY2BGR"],
          ["BGR2HSV", "cv2.COLOR_BGR2HSV"],
          ["HSV2BGR", "cv2.COLOR_HSV2BGR"],]), "flag");
    this.appendValueInput("img")
        .setCheck("image")
        .appendField("cvtColor");
    this.setOutput(true, "image");
    this.setTooltip('');
  }
};
Blockly.Python['cvtcolor'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var flag = block.getFieldValue('flag');
  var code = "cv2.cvtColor("+img+","+flag+")";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['threshold'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("30"), "thresh_val")
        .appendField(new Blockly.FieldTextInput("255"), "thresh_to")
        .appendField(new Blockly.FieldDropdown([
          ["BINARY","cv2.THRESH_BINARY"],
          ["BINARY_INV", "cv2.THRESH_BINARY_INV"],
          ["OTSU", "cv2.THRESH_OTSU"]]), "flag");
    this.appendValueInput("img")
        .appendField("threshold")
        .setCheck("image");
    this.setOutput(true, "image");
    this.setTooltip('');
  }
};
Blockly.Python['threshold'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var flag = block.getFieldValue('flag');
  var thresh_val = block.getFieldValue('thresh_val');
  var thresh_to = block.getFieldValue('thresh_to');
  var code = "cv2.threshold("+img+","+thresh_val+","+thresh_to+","+flag+")[1]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['newimage'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("new image")
        .appendField(new Blockly.FieldTextInput("100"), "w")
        .appendField(new Blockly.FieldTextInput("100"), "h")
        .appendField(new Blockly.FieldDropdown([["bgr", "bgr"], ["gray","gray"], ["float", "float"]]), "type")
    this.appendValueInput("color")
        .appendField("color")
        //.setCheck("Colour");
    this.setOutput(true, "image");
    this.setTooltip('make a new, empty image');
  }
};
Blockly.Python['newimage'] = function(block) {
  var w = block.getFieldValue('w');
  var h = block.getFieldValue('h');
  var t = block.getFieldValue('type');
  var c = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  code = "np.ones(("+h+","+w+"),np.uint8)";
  if (t=="bgr")
    code = "np.ones(("+h+","+w+","+3+"),np.uint8)";
  if (t=="float")
    code = "np.ones(("+h+","+w+"),np.float)";
  if (c)
    code += " * " + c;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['point'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("point")
        .appendField(new Blockly.FieldTextInput("0"), "x")
        .appendField(new Blockly.FieldTextInput("0"), "y")
    this.setOutput(true, "point");
    this.setTooltip('');
  }
};
Blockly.Python['point'] = function(block) {
  var x = block.getFieldValue('x');
  var y = block.getFieldValue('y');
  var code = "("+x+","+y+")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['point_tl'] = {
  init: function() {
    this.setColour(65);
    this.appendValueInput("rect")
        .appendField("tl")
        .setCheck("rect");
    this.setOutput(true, "point");
    this.setTooltip('');
  }
};
Blockly.Python['point_tl'] = function(block) {
  var r = Blockly.Python.valueToCode(block, 'rect', Blockly.Python.ORDER_ATOMIC);
  var code = "("+r+"[0],"+r+"[1])";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['point_br'] = {
  init: function() {
    this.setColour(65);
    this.appendValueInput("rect")
        .appendField("br")
        .setCheck("rect");
    this.setOutput(true, "point");
    this.setTooltip('');
  }
};
Blockly.Python['point_br'] = function(block) {
  var r = Blockly.Python.valueToCode(block, 'rect', Blockly.Python.ORDER_ATOMIC);
  var code = "("+r+"[0]+" + r + "[2],"+r+"[1]+"+r+"[3])";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['size'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("size")
        .appendField(new Blockly.FieldTextInput("0"), "w")
        .appendField(new Blockly.FieldTextInput("0"), "h")
    this.setOutput(true, "size");
    this.setTooltip('');
  }
};
Blockly.Python['size'] = function(block) {
  var w = block.getFieldValue('w');
  var h = block.getFieldValue('h');
  var code = "("+w+","+h+")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['tuple'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("tuple")
    this.appendValueInput("X")
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['tuple'] = function(block) {
  var X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var code = "("+X+")";
  return [code, Blockly.Python.ORDER_NONE];
};
//~ Blockly.Blocks['tuple'] = {
  //~ init: function() {
    //~ this.setColour(65);
    //~ this.appendDummyInput()
        //~ .appendField("tuple")
        //~ .appendField(new Blockly.FieldTextInput("0"), "a")
        //~ .appendField(new Blockly.FieldTextInput("0"), "b")
        //~ .appendField(new Blockly.FieldTextInput("0"), "c")
    //~ this.setOutput(true, "Colour");
    //~ this.setTooltip('');
  //~ }
//~ };
//~ Blockly.Python['tuple'] = function(block) {
  //~ var a = block.getFieldValue('a');
  //~ var b = block.getFieldValue('b');
  //~ var c = block.getFieldValue('c');
  //~ var code = "("+a+","+b+","+c+")";
  //~ return [code, Blockly.Python.ORDER_NONE];
//~ };

Blockly.Blocks['forRange'] = {
  init: function() {
    this.setColour(135);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('i'), 'i')
        .appendField("in range")
    this.appendValueInput("rend")
        .setCheck("Number");
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['forRange'] = function(block) {
  var i = block.getFieldValue('i');
  var stop = Blockly.Python.valueToCode(block, 'rend', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "for "+i+" in range("+stop+"):\n"+s;
  return code;
};

Blockly.Blocks['forEnum'] = {
  init: function() {
    this.setColour(135);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("enumerate");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('index'), 'index')
        .appendField("and")
        .appendField(new Blockly.FieldVariable('i'), 'i')
        .appendField("in")
    this.appendValueInput("list")
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('index'),this.getFieldValue('i')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('index'))) { this.setFieldValue(newName, 'index'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('i'))) { this.setFieldValue(newName, 'i'); }
  },
};
Blockly.Python['forEnum'] = function(block) {
  var index = block.getFieldValue('index');
  var i = block.getFieldValue('i');
  var list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "for "+index+","+i+" in enumerate("+list+"):\n"+s;
  return code;
};


Blockly.Blocks['text_eval'] = {
  init: function() {
    this.setColour(45);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("eval")
        .appendField(new Blockly.FieldTextInput(""), "text");
    //~ this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('direct python eval');
  }
};

Blockly.Python['text_eval'] = function(block) {
  var c = block.getFieldValue('text');
  var code = c + "\n";
  return code;
};

//-------------------------------------
/*LEGACY_BLOCKS_START: Old timings blocks*/
Blockly.Python['delay_ms'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep_ms(' + value_time + ')\n';
  return code;
};

Blockly.Python['delay_us'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep_us(' + value_time + ')\n';
  return code;
};

Blockly.Python['ticks_ms'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = 'time.ticks_ms()\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ticks_us'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = 'time.ticks_us()\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ticks_diff'] = function(block) {
  var value_start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
  var value_end = Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';
  
  value_start=value_start.split('\n').join('');
  value_end=value_end.split('\n').join('');

  var code = 'time.ticks_diff(' + value_end + ',' + value_start + ')\n';
  return [code, Blockly.Python.ORDER_NONE];

};
/*LEGACY_BLOCKS_END: Old timings blocks*/
Blockly.Python['utime.vars'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var dropdown_vars = block.getFieldValue('VARS');
  var code =  `utime.${dropdown_vars}()`;
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['utime.delay'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var code =  `utime.${dropdown_scale}(${value_time})\n`;
  return code;
};
Blockly.Python['utime.ticks_add'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time1 = Blockly.Python.valueToCode(block, 'TIME1', Blockly.Python.ORDER_NONE);
  var value_time2 = Blockly.Python.valueToCode(block, 'TIME2', Blockly.Python.ORDER_NONE);

  var code =  `utime.ticks_add(${value_time1},${value_time2})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['utime.ticks_diff'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time1 = Blockly.Python.valueToCode(block, 'TIME1', Blockly.Python.ORDER_NONE);
  var value_time2 = Blockly.Python.valueToCode(block, 'TIME2', Blockly.Python.ORDER_NONE);

  var code =  `utime.ticks_diff(${value_time1},${value_time2})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['utime.deadline'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';

  var value_id = block.getFieldValue('ID');
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var statements_do = Blockly.Python.statementToCode(block, 'DO');

  var code = `deadline${value_id} = utime.ticks_add(utime.${dropdown_scale}(), ${value_time})\nwhile utime.ticks_diff(deadline${value_id}, utime.${dropdown_scale}()) > 0:\n${statements_do}\n`;
  return code;
};


Blockly.Python['esp32_get_rtc'] = function(block) {
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var code = 'rtc.datetime()';
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['esp8266_get_rtc'] = function(block) {
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var code = 'rtc.datetime()';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['esp32_set_rtc'] = function(block) {
  //var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var y = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var d = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var min = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'rtc.datetime((' + y + ',' + m + ',' + d + ',0,' + h + ',' + min + ',' + s + ',0))\n';
  return code;
};


Blockly.Python['esp8266_set_rtc'] = function(block) {
  //var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var y = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var d = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var min = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'rtc.datetime((' + y + ',' + m + ',' + d + ',0,' + h + ',' + min + ',' + s + ',0))\n';
  return code;
};


Blockly.Python['stop_timer'] = function(block) {
  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';
  
  var tn = Blockly.Python.valueToCode(block, 'timerNumber', Blockly.Python.ORDER_ATOMIC);
  var code = 'tim' + tn + '.deinit()\n';

  return code;
};
Blockly.Python['thread'] = function(block) {

  // var interval = block.getFieldValue('interval');
  // var timerNumber = block.getFieldValue('timerNumber');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  
  Blockly.Python.definitions_['import_thread'] = 'import _thread';

  Blockly.Python.definitions_['import_timer_callback' ] = '\n#Thread function \ndef thread2():\n' + statements_name + '_thread.start_new_thread(thread2'  + ', ())\n\n'; 
  // Blockly.Python.definitions_['import_timer_callback' + timerNumber] = '\n#Thread function \ndef thread' + timerNumber + '():\n' + statements_name + '\n\n'; 

  // var code = '_thread.start_new_thread(thread2'  + ', ())\n';
  var code = '';
             
  return code;
};

Blockly.Python['timer'] = function(block) {

  var interval = block.getFieldValue('interval');
  var timerNumber = block.getFieldValue('timerNumber');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  var dropdown_mode = block.getFieldValue('MODE');
  
  // Fix for global variables inside callback
  // Piece of code from generators/python/procedures.js
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; (variable = variables[i]); i++) {
    var varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.nameDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';
  Blockly.Python.definitions_[`import_timer_start${timerNumber}`] = `tim = Timer()`;
  // Blockly.Python.definitions_[`import_timer_start${timerNumber}`] = `tim${timerNumber} = Timer(${timerNumber})`;

  Blockly.Python.definitions_[`import_timer_callback`] = `\n#Timer Function Callback\ndef timerFunc(t):\n${globals}${statements_name}\n\n`;
  // Blockly.Python.definitions_[`import_timer_callback${timerNumber}`] = `\n#Timer Function Callback\ndef timerFunc${timerNumber}(t):\n${globals}${statements_name}\n\n`;

  var code = `tim.init(period=${interval}, mode=Timer.${dropdown_mode}, callback=timerFunc)\n`;
  // var code = `tim${timerNumber}.init(period=${interval}, mode=Timer.${dropdown_mode}, callback=timerFunc${timerNumber})\n`;
             
  return code
};

Blockly.Python['pico_timer'] = function(block) {

  var interval = block.getFieldValue('interval');
  var timerNumber = block.getFieldValue('timerNumber');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  
  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';
  Blockly.Python.definitions_['import_timer_start'] = 'tim=Timer()'; //-1)';

  Blockly.Python.definitions_['import_timer_callback'] = '\n#Timer Function Callback\ndef timerFunc(t):\n' + statements_name + '\n\n'; 

  var code = 'tim.init(period=' + interval + ', mode=Timer.PERIODIC, callback=timerFunc)\n';
             
  return code;
};



Blockly.Python['deep_sleep8266'] = function(block) {
	var value_interval = Blockly.Python.valueToCode(block, 'interval', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = 'rtc = machine.RTC()\n';
	code += 'rtc.irq(trigger=rtc.ALARM0, wake=machine.DEEPSLEEP)\n';
	code += 'rtc.alarm(rtc.ALARM0, ' + value_interval + ')\n';
	code += 'machine.deepsleep()\n';
	return code;
  };


Blockly.Python['deep_sleep'] = function(block) {
	var value_interval = Blockly.Python.valueToCode(block, 'interval', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = 'machine.deepsleep(' + value_interval + ')\n';
	return code;
  };


Blockly.Python['pwm'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_ATOMIC);
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  this.check([value_frequency,value_duty], value_pin);
  this.setID(value_pin)
	var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty(${value_duty})\n`;
	return code;
};

Blockly.Python['pwm_pico'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_ATOMIC);
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  this.check([value_frequency,value_duty], value_pin);
  this.setID(value_pin)
	var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty_u16(${value_duty})\n`;
	return code;
};

Blockly.Python['pwm_pico_percent'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_ATOMIC);
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  this.check([value_frequency,value_duty], value_pin);
  this.setID(value_pin)

  var code ='duty_val = int(' + value_duty +' / 100 * 65535)\n';
	code += `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty_u16(duty_val)\n`;
	return code;
};

Blockly.Python['pwm.init'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  this.setID(value_pin)
	var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\n`;
	return code;
};

Blockly.Python['pwm.freq'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_NONE);
  var code = `pwm${number_id}.freq(${value_frequency})\n`;

  this.check(value_frequency, number_id);
  return code;
};

Blockly.Python['pwm.duty'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_NONE);
  var code = `pwm${number_id}.duty(${value_duty})\n`;

  this.check(value_duty, number_id);
  return code;
};

Blockly.Python['pwm.duty_pico'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_NONE);
  var code = `pwm${number_id}.duty_u16(${value_duty})\n`;

  this.check(value_duty, number_id);
  return code;
};

Blockly.Python['pwm.duty_pico_percent'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_NONE);
  var code ='duty_val = int(' + value_duty +' / 100 * 65535)\n';
  code += `pwm${number_id}.duty_u16(duty_val)\n`;

  this.check(value_duty, number_id);
  return code;
};

Blockly.Python['pwm.deinit'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var code = `pwm${number_id}.deinit()\n`;
  return code;
};


//Sckit-Learn Test
//Author: Andouglas Junior

Blockly.Python['randomforestclassifier'] = function(block) {
	var value_random_state = Blockly.Python.valueToCode(block, 'random_state', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_random_forest_classifier'] = 'from sklearn.ensemble import RandomForestClassifier';
	var code = 'RandomForestClassifier(random_state='+value_random_state+')\n';
	return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['fit'] = function(block) {
	var value_classifier = Blockly.Python.valueToCode(block, 'classifier', Blockly.Python.ORDER_ATOMIC);
	var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
	var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
	var code = value_classifier+'.fit('+value_x+','+value_y+')\n';
	return code;
  };

  Blockly.Python['predict'] = function(block) {
	var value_classifier = Blockly.Python.valueToCode(block, 'classifier', Blockly.Python.ORDER_ATOMIC);
	var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
	var code = value_classifier+'.predict('+value_x+')\n';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_NONE];
  };
  
Blockly.Python['file_open'] = function(block) {
  var value_file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
  var mode = block.getFieldValue('dropdown_mode');
  var binary = block.getFieldValue('checkbox_binary') == 'TRUE';

  var modeB = '';
  if (binary)
    modeB='b'+mode;
  else
    modeB=mode;

  var code = 'open(' + value_file_name + ', \'' + modeB + '\')\n';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['file_open_write'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var code = 'f = open(' + pIn + ', \'a+\')\n';
  //var code = 'f = open(' + pIn + ', \'w\')\n';
  return code;
};


Blockly.Python['file_open_read'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var code = 'f = open(' + pIn + ')\n';
  return code;
};

Blockly.Python['file_close'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
 
  var code = variable_filename + '.close()\n';
  return code;
};


Blockly.Python['file_close_old'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var code = 'f.close()\n';
  return code;
};

Blockly.Python['file_read'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
 
  var code = variable_filename + '.read()\n';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['file_read_old'] = function(block) {
  var code = 'f.read()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['file_write'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
 
  var code = variable_filename + '.write(' + value_data + ')\n';

  return code;
};

Blockly.Python['file_write_line'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
 
  var code = variable_filename + '.write(' + value_data + ')\n';
      code += variable_filename + ".write('\\n')\n";

  return code;
};

Blockly.Python['file_write_byte'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
 
  var code = variable_filename + '.write(struct.pack(\"B\",' + value_data + '))\n';

  return code;
};


Blockly.Python['file_write_old'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var code = 'f.write(' + pIn + ')\n';
  code += "f.write('\\n')\n";
  return code;
};


Blockly.Python['files_list'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  var code = 'os.listdir()';
  return [code, Blockly.Python.ORDER_NONE];
};

//HCSR04 ultrasound

Blockly.Python['hcsr_init'] = function(block) {
  var pEcho = Blockly.Python.valueToCode(block, 'echo', Blockly.Python.ORDER_ATOMIC);
  var pTrig = Blockly.Python.valueToCode(block, 'trigger', Blockly.Python.ORDER_ATOMIC);
  var pTime = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_hcr'] = `

from machine import time_pulse_us

#Based on: https://github.com/lemariva/uPySensors
class HCSR04:
    def __init__(self, trigger_pin, echo_pin, echo_timeout_us=500*2*30):
        self.echo_timeout_us = echo_timeout_us
        self.trigger = Pin(trigger_pin, mode=Pin.OUT)
        self.trigger.value(0)
        self.echo = Pin(echo_pin, mode=Pin.IN)

    def _send_pulse_and_wait(self):
        self.trigger.value(0)
        time.sleep_us(5)
        self.trigger.value(1)
        time.sleep_us(10)
        self.trigger.value(0)
        try:
			pulse_time = time_pulse_us(self.echo, 1, self.echo_timeout_us)
			return pulse_time
        except OSError as ex:
            if ex.args[0] == 110: # 110 = ETIMEDOUT
                raise OSError('Out of range')
            raise ex

    def distance_mm(self):
        pulse_time = self._send_pulse_and_wait()
        mm = pulse_time * 100 // 582
        return mm

    def distance_cm(self):
        pulse_time = self._send_pulse_and_wait()
        cms = (pulse_time / 2) / 29.1
        return cms
`;

/*
 * while 1:
	sensor = HCSR04(trigger_pin=13, echo_pin=15, echo_timeout_us=10000)
	distance = sensor.distance_mm()
	print(distance)
	time.sleep(1)

*/


  var code = 'ultraSoundSensor = HCSR04(trigger_pin=' + pTrig + ', echo_pin=' + pEcho + ', echo_timeout_us=' + pTime + ')\n';

  return code;
};

Blockly.Python['hcsr_read'] = function(block) {
  var code = 'ultraSoundSensor.distance_mm()';
  return [code, Blockly.Python.ORDER_NONE];
};

//I2C Character LCD

Blockly.Python['char_lcd_init'] = function(block) {
  Blockly.Python.definitions_['import_i2c_lcd'] = 'from esp8266_i2c_lcd import I2cLcd';
  var code = 'lcd = I2cLcd(i2c, DEFAULT_I2C_ADDR, 2, 16)\n';
  return code;
};

Blockly.Python['char_lcd_clear'] = function(block) {
  var code = 'lcd.clear()\n';
  return code;
};

Blockly.Python['char_lcd_putstr'] = function(block) {
  var code = "lcd.putstr('test')\n";
  return code;
};

Blockly.Python['char_lcd_moveto'] = function(block) {
  var code = 'lcd.move_to(0,0)\n';
  return code;
};

Blockly.Python['char_lcd_backlight'] = function(block) {
  var code = 'lcd.backlight_on()\n';
  return code;
};

Blockly.Python['char_lcd_display'] = function(block) {
  var code = 'lcd.display_on()\n';
  return code;
};


//MFRC522 RFID module

Blockly.Python['rfid_rc522_init'] = function(block) {
  var sck = Blockly.Python.valueToCode(block, 'sck', Blockly.Python.ORDER_ATOMIC);
  var mosi = Blockly.Python.valueToCode(block, 'mosi', Blockly.Python.ORDER_ATOMIC);
  var miso = Blockly.Python.valueToCode(block, 'miso', Blockly.Python.ORDER_ATOMIC);
  var rst = Blockly.Python.valueToCode(block, 'rst', Blockly.Python.ORDER_ATOMIC);
  var cs = Blockly.Python.valueToCode(block, 'cs', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_mfrc522'] = 'import mfrc522';

  //var code = 'rdr=mfrc522.MFRC522(0,2,4,5,14)\n';
  var code = 'rdr=mfrc522.MFRC522(' + sck + ',' + mosi + ',' + miso + ',' + rst + ',' + cs + ')\n';
  return code;
};


Blockly.Python['rfid_rc522_detect_card'] = function(block) {
  var stat = Blockly.Python.valueToCode(block, 'stat', Blockly.Python.ORDER_ATOMIC);
  var tag = Blockly.Python.valueToCode(block, 'tag', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_mfrc522'] = 'import mfrc522';

  var code = '(' + stat + ',' + tag + ') = rdr.request(rdr.REQIDL)\n';
  //return [code, Blockly.Python.ORDER_NONE];
  return code;
};


Blockly.Python['rfid_rc522_anticoll'] = function(block) {
  var stat = Blockly.Python.valueToCode(block, 'stat', Blockly.Python.ORDER_ATOMIC);
  var tag = Blockly.Python.valueToCode(block, 'tag', Blockly.Python.ORDER_ATOMIC);

  var code = '(' + stat + ',' + tag + ') = rdr.anticoll()\n';
  return code;

  //Blockly.Python.definitions_['import_mfrc522'] = 'import mfrc522';
  //var code = 'rdr.anticoll()';
  //return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['rfid_rc522_read_card'] = function(block) {
  var code = 'rdr=mfrc522.MFRC522(0,2,4,5,14)\n';
  return code;
};


Blockly.Python['rfid_rc522_write_card'] = function(block) {
  var code = 'rdr=mfrc522.MFRC522(0,2,4,5,14)\n';
  return code;
};


Blockly.Python['umail_init'] = function(block) {
  var host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC);
  var password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umail'] = 'import umail';

  var code = 'smtp = umail.SMTP(' + host + ',' + port + ',' + 'username=' + username + ',' + 'password=' + password + ')\n';
  return code;

};

Blockly.Python['umail_send'] = function(block) {
  var to = Blockly.Python.valueToCode(block, 'to', Blockly.Python.ORDER_ATOMIC);
  var subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
  var contents = Blockly.Python.valueToCode(block, 'contents', Blockly.Python.ORDER_ATOMIC);

  var s = subject.replace('\'','').replace('\'','');
  var c = contents.replace('\'','').replace('\'','');
  var msg = 'Subject: ' + s + '\\n\\n' + c;


  var code = 'smtp.to(' + to + ')\n';
	code += 'smtp.send(\'' + msg + '\')\n';
	code += 'smtp.quit()\n';
  return code;

};


//New Network related functions

Blockly.Python['net_ntp_sync'] = function(block) {
//  var server = Blockly.Python.valueToCode(block, 'server', Blockly.Python.ORDER_ATOMIC);
  var tz = Blockly.Python.valueToCode(block, 'tz', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_ntptime'] = 'import ntptime';
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_utime'] = 'import utime';

  var code = 'ntptime.settime()\n';
	code += 'rtc = machine.RTC()\n';
	code += 'utc_shift=' + tz + '\n';
	code += 'tm = utime.localtime(utime.mktime(utime.localtime()) + utc_shift*3600)\n';
	code += 'tm = tm[0:3] + (0,) + tm[3:6] + (0,)\n';
	code += 'rtc.datetime(tm)\n';
	code += "rtc.datetime()\n";

	/*Useful:
	 * >>>from machine import RTC
>>>(year, month, mday, week_of_year, hour, minute, second, milisecond)=RTC().datetime()
>>>RTC().init((year, month, mday, week_of_year, hour+2, minute, second, milisecond)) # GMT correction. GMT+2
>>>print ("Fecha/Hora (year, month, mday, week of year, hour, minute, second, milisecond):", RTC().datetime())
>>>print ("{:02d}/{:02d}/{} {:02d}:{:02d}:{:02d}".format(RTC().datetime()[2],RTC().datetime()[1],RTC().datetime()[0],RTC().datetime()[4],RTC().datetime()[5],RTC
*/
  return code;

};


Blockly.Python['net_wiznet5k_init'] = function(block) {

  //Reference: https://docs.micropython.org/en/latest/library/network.WIZNET5K.html
	
  var spi = Blockly.Python.valueToCode(block, 'spi', Blockly.Python.ORDER_ATOMIC);
  var cs = Blockly.Python.valueToCode(block, 'cs', Blockly.Python.ORDER_ATOMIC);
  var rst = Blockly.Python.valueToCode(block, 'rst', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_network'] = 'import utime';

  var code = 'nic = network.WIZNET5K(' + spi + ',' + cs + ',' + rst + '\n';

  return code;

};


Blockly.Python['net_wiznet5k_isconnected'] = function(block) {

  var code = 'WIZNET5K.isconnected()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_wiznet5k_regs'] = function(block) {

  var code = 'WIZNET5K.regs()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_wiznet5k_ifconfig'] = function(block) {
  var ip = Blockly.Python.valueToCode(block, 'ip', Blockly.Python.ORDER_ATOMIC);
  var subnet = Blockly.Python.valueToCode(block, 'subnet', Blockly.Python.ORDER_ATOMIC);
  var gw = Blockly.Python.valueToCode(block, 'gw', Blockly.Python.ORDER_ATOMIC);
  var dns = Blockly.Python.valueToCode(block, 'dns', Blockly.Python.ORDER_ATOMIC);

  var code = 'nic.ifconfig((' + ip + ',' + subnet + ',' + gw + ',' + dns + '))\n';

  return code;
};


Blockly.Python['net_socket_connect'] = function(block) {
  var host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_socket'] = 'import socket';

  //var code = 'addr_info = socket.getaddrinfo("towel.blinkenlights.nl", 23)';
  var code = 'addr_info = socket.getaddrinfo(' + host + ',' + port + ')\n';
      code += 'addr = addr_info[0][-1]\n';
      code += 's = socket.socket()\n';
      code += 's.connect(addr)\n';

  return code;
};

Blockly.Python['net_socket_receive'] = function(block) {
  var bytes = Blockly.Python.valueToCode(block, 'bytes', Blockly.Python.ORDER_ATOMIC);

  var code = "str(s.recv(" + bytes + "), 'utf8')";

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_socket_send'] = function(block) {
  var bytes = Blockly.Python.valueToCode(block, 'bytes', Blockly.Python.ORDER_ATOMIC);

  var code = "s.send(bytes(" + bytes + ", 'utf8'))\n";

  return code;
};


Blockly.Python['net_socket_close'] = function(block) {

  var code = 's.close()\n';

  return code;
};


/*
 *
 *
 *
 * HTTP Web Server Example From MicroPython
import machine
pins = [machine.Pin(i, machine.Pin.IN) for i in (0, 2, 4, 5, 12, 13, 14, 15)]

html = """<!DOCTYPE html>
<html>
    <head> <title>ESP8266 Pins</title> </head>
    <body> <h1>ESP8266 Pins</h1>
        <table border="1"> <tr><th>Pin</th><th>Value</th></tr> %s </table>
    </body>
</html>
"""

import socket
addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]

s = socket.socket()
s.bind(addr)
s.listen(1)

print('listening on', addr)

while True:
    cl, addr = s.accept()
    print('client connected from', addr)
    cl_file = cl.makefile('rwb', 0)
    while True:
        line = cl_file.readline()
        if not line or line == b'\r\n':
            break
    rows = ['<tr><td>%s</td><td>%d</td></tr>' % (str(p), p.value()) for p in pins]
    response = html % '\n'.join(rows)
    cl.send('HTTP/1.0 200 OK\r\nContent-type: text/html\r\n\r\n')
    cl.send(response)
    cl.close()
*/

Blockly.Python['net_http_server_start'] = function(block) {
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_socket'] = 'import socket';

  var code = "http_addr = socket.getaddrinfo('0.0.0.0'," + port + ")[0][-1]\n";
      code += 's = socket.socket()\n';
      code += 's.bind(http_addr)\n';
      code += 's.listen(1)\n';
      code += "print('BIPES HTTP Server Listening on', http_addr)\n";

  return code;
};


Blockly.Python['net_http_server_accept'] = function(block) {

  var code = "cl, http_addr = s.accept()\n";
      code += "print('client connected from', http_addr)\n";
      code += "cl_file = cl.makefile('rwb', 0)\n";
      code += "while True:\n";
      code += "    line = cl_file.readline()\n";
      code += "    lineS = str(line, 'utf8')\n";
      code += "    print(line)\n";
      code += "    if lineS.startswith('GET /'):\n";
      code += "        http_request_page = (lineS.split('/')[1]).split(' ')[0]\n";
      code += "        print('Request page = ' + http_request_page)\n";
      code += "    if not line or line == b'\\r\\n':\n";
      code += "        break\n";

  return code;
};

Blockly.Python['net_http_server_requested_page'] = function(block) {

  var code = 'http_request_page';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_http_server_send_response'] = function(block) {
  var html = Blockly.Python.valueToCode(block, 'html', Blockly.Python.ORDER_ATOMIC);

  var code = 'response = ' + html + '\n';
      code += "cl.send('HTTP/1.0 200 OK\\r\\nContent-type: text/html\\r\\n\\r\\n')\n";
      code += 'cl.send(response)\n';
      code += 'cl.close()\n';

  return code;
};


Blockly.Python['net_http_server_close'] = function(block) {

  var code = 'cl.close()\n';

  return code;
};

//SIM900L GSM MODEM
Blockly.Python['gsm_modem_init'] = function(block) {
  var tx = Blockly.Python.valueToCode(block, 'tx', Blockly.Python.ORDER_ATOMIC);
  var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
  var bps = Blockly.Python.valueToCode(block, 'bps', Blockly.Python.ORDER_ATOMIC);

  var code = '#init GSM Module \n';

  return code;
};

Blockly.Python['gsm_modem_send_at'] = function(block) {
  var cmd = Blockly.Python.valueToCode(block, 'cmd', Blockly.Python.ORDER_ATOMIC);

  var code = '#init GSM Module AT \n';

  return code;
};

Blockly.Python['gsm_modem_send_sms'] = function(block) {
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var msg = Blockly.Python.valueToCode(block, 'msg', Blockly.Python.ORDER_ATOMIC);

  var code = '#Send SMS \n';

  return code;
};

Blockly.Python['gsm_modem_http_get'] = function(block) {
  var cmd = Blockly.Python.valueToCode(block, 'cmd', Blockly.Python.ORDER_ATOMIC);

  var code = '#GSM Module HTTP GET\n';

  return code;
};


Blockly.Python['gsm_modem_response'] = function(block) {
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);

  var code = '#GSM Module Response \n';

  return [code, Blockly.Python.ORDER_NONE];
};



//UART
Blockly.Python['uart_init'] = function(block) {
  //Reference: 
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var bits = Blockly.Python.valueToCode(block, 'bits', Blockly.Python.ORDER_ATOMIC);
  var par = Blockly.Python.valueToCode(block, 'par', Blockly.Python.ORDER_ATOMIC);
  var stop = Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_machine_uart'] = 'from machine import uart';

  var code = 'uart = UART(1, 9600)\n';
      code += "uart.init(" + speed + ', bits=' + bits + ', parity=' + par + ', stop=' + stop + ')\n';

  return code;
};

Blockly.Python['uart_write'] = function(block) {
  var buf = Blockly.Python.valueToCode(block, 'buf', Blockly.Python.ORDER_ATOMIC);

  var code = 'uart.write(' + buf + ')\n';

  return code;
};

Blockly.Python['uart_read'] = function(block) {
  var s = Blockly.Python.valueToCode(block, 's', Blockly.Python.ORDER_ATOMIC);

  var code = 'uart.read(' + s + ')';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_read_all'] = function(block) {

  var code = 'uart.read()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_readline'] = function(block) {

  var code = 'uart.readline()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_read_into'] = function(block) {
  var b = Blockly.Python.valueToCode(block, 'buffer', Blockly.Python.ORDER_ATOMIC);

  var code = 'uart.readinto(' + b + ')';

  return [code, Blockly.Python.ORDER_NONE];
};



//MAX30100 oximeter
Blockly.Python['max30100_init'] = function(block) {
  var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

  var code = '#TODO: init max30100\n';

  return code;
};

Blockly.Python['max30100_read'] = function(block) {

  var code = '#read max30100\n';

  return code;
};

Blockly.Python['max30100_red'] = function(block) {

  var code = '1';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['max30100_ir'] = function(block) {

  var code = '2';

  return [code, Blockly.Python.ORDER_NONE];
};

//GPS Module
Blockly.Python['gps_init'] = function(block) {
  var tx = Blockly.Python.valueToCode(block, 'tx', Blockly.Python.ORDER_ATOMIC);
  var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
  var bps = Blockly.Python.valueToCode(block, 'bps', Blockly.Python.ORDER_ATOMIC);

  var code = '#TODO: init GPS\n';

  return code;
};

Blockly.Python['gps_update'] = function(block) {

  var code = '#update gps \n';

  return code;
};

Blockly.Python['gps_get_lat'] = function(block) {

  var code = 'gps_lat';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_long'] = function(block) {

  var code = 'gps_long';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['gps_get_height'] = function(block) {

  var code = 'gps_speed';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['gps_get_speed'] = function(block) {

  var code = 'gps_speed';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['gps_get_datetime'] = function(block) {

  var code = 'gps_datetime';

  return [code, Blockly.Python.ORDER_NONE];
};

//Optical Encoder
Blockly.Python['encoder_init'] = function(block) {
  var p0 = Blockly.Python.valueToCode(block, 'p0', Blockly.Python.ORDER_ATOMIC);
  var p1 = Blockly.Python.valueToCode(block, 'p1', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_encoder_class'] = `

#Encoder class
#Source: https://github.com/peterhinch/micropython-samples/blob/master/encoders/encoder_portable.py
class Encoder(object):
    def __init__(self, pin_x, pin_y, reverse, scale):
        self.reverse = reverse
        self.scale = scale
        self.forward = True
        self.pin_x = pin_x
        self.pin_y = pin_y
        self._pos = 0
        self.x_interrupt = pin_x.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=self.x_callback)
        self.y_interrupt = pin_y.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=self.y_callback)

    def x_callback(self, line):
        self.forward = self.pin_x.value() ^ self.pin_y.value() ^ self.reverse
        self._pos += 1 if self.forward else -1

    def y_callback(self, line):
        self.forward = self.pin_x.value() ^ self.pin_y.value() ^ self.reverse ^ 1
        self._pos += 1 if self.forward else -1

    @property
    def position(self):
        return self._pos * self.scale

    @position.setter
    def position(self, value):
        self._pos = value // self.scale

  `;

	/*
  Blockly.Python.definitions_['import_encoder_callback'] = `

#BIPES Encoder CallBack
x=0

def callback(p):
    global x
    x=x+1
    print(x)
    `;

	//TODO: count backwards
  var code =  "p0 = Pin(" + p0 + ", Pin.IN)\n";
      code += "p1 = Pin(" + p1 + ", Pin.IN)\n";
      code += "p0.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=callback) \n";
      code += "p1.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=callback) \n";
      */

  var code =  "p00 = Pin(" + p0 + ", Pin.IN)\n";
      code += "p11 = Pin(" + p1 + ", Pin.IN)\n";
      code += "encoder = Encoder(p00,p11,1,1)\n";

  return code;
};

Blockly.Python['encoder_reset'] = function(block) {

  var code = 'encoder.position=0\n';

  return code;
};

Blockly.Python['encoder_read'] = function(block) {

  var code = 'encoder.position';

  return [code, Blockly.Python.ORDER_NONE];
};


//Stepper Motor
Blockly.Python['stepper_init'] = function(block) {
  var p0 = Blockly.Python.valueToCode(block, 'p0', Blockly.Python.ORDER_ATOMIC);
  var p1 = Blockly.Python.valueToCode(block, 'p1', Blockly.Python.ORDER_ATOMIC);
  var p2 = Blockly.Python.valueToCode(block, 'p2', Blockly.Python.ORDER_ATOMIC);
  var p3 = Blockly.Python.valueToCode(block, 'p3', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = `
pins = [
    Pin(` + p0 + `, Pin.OUT),  # 1
    Pin(` + p1 + `, Pin.OUT),  # 2
    Pin(` + p2 + `, Pin.OUT),  # 4
    Pin(` + p3 + `, Pin.OUT),  # 8
]

phases = [ 1, 5, 4, 6, 2, 10, 8, 9 ]
`;

  return code;
};

Blockly.Python['stepper_step'] = function(block) {
  var step = Blockly.Python.valueToCode(block, 'steps', Blockly.Python.ORDER_ATOMIC);

  //Source example: http://mpy-tut.zoic.org/tut/motors.html
  var code = `
for i in range(1, ` + step + `):
	for phase in phases:
		for n, p in enumerate(pins):
			pins[n](phase & 1 < < n)
		time.sleep(0.001)
`;

  return code;
};


//DC Motor with H-Bridge
Blockly.Python['dc_motor_init'] = function(block) {
  var pwm = Blockly.Python.valueToCode(block, 'pwm', Blockly.Python.ORDER_ATOMIC);
  var dir1 = Blockly.Python.valueToCode(block, 'dir1', Blockly.Python.ORDER_ATOMIC);
  var dir2 = Blockly.Python.valueToCode(block, 'dir2', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  var code =  "dc_motor_pin_a = Pin(" + dir1 + ", Pin.OUT)\n";
      code +=  "dc_motor_pin_b = Pin(" + dir2 + ", Pin.OUT)\n";
      code +=  "dc_motor_pwm = PWM(" + pwm + ")\n";

  return code;
};

Blockly.Python['dc_motor_power'] = function(block) {
  var pwr = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);

  var code = 'dc_motor_pwm.duty(' + pwr + ')\n';

  return code;
};

Blockly.Python['dc_motor_direction'] = function(block) {
  var dir = Blockly.Python.valueToCode(block, 'dir', Blockly.Python.ORDER_ATOMIC);

  var code='\n';

  if (dir == 0) 
	code = `
dc_motor_pin_a.value=0
dc_motor_pin_b.value=0
`;

  if (dir == 1) 
	code = `
dc_motor_pin_a.value=1
dc_motor_pin_b.value=0
`;

  if (dir == 2) 
	code = `
dc_motor_pin_a.value=0
dc_motor_pin_b.value=1
`;

  if (dir == 3) 
	code = `
dc_motor_pin_a.value=1
dc_motor_pin_b.value=1
`;

  return code;
};

Blockly.Python['dc_motor_stop'] = function(block) {

  var code = 'dc_motor_pin_a.value=0\n';
      code += 'dc_motor_pin_b.value=0\n';

  return code;
};


//ESP32 specific functions

//CAN BUS
//https://github.com/nos86/micropython/blob/esp32-can-driver-v3/docs/library/machine.CAN.rst
Blockly.Python['esp32_can_init'] = function(block) {
  var mode = Blockly.Python.valueToCode(block, 'mode', Blockly.Python.ORDER_ATOMIC);
  var baudrate = Blockly.Python.valueToCode(block, 'baudrate', Blockly.Python.ORDER_ATOMIC);
  var extframe = Blockly.Python.valueToCode(block, 'extframe', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_can'] = 'from machine import CAN';

  //BAUDRATE_500k = 500
  var code = 'can = CAN(0, extframe=True, mode=CAN.LOOPBACK, baudrate=500)\n';

  return code;
};

Blockly.Python['esp32_can_filter'] = function(block) {
  var filter = Blockly.Python.valueToCode(block, 'filter', Blockly.Python.ORDER_ATOMIC);

  //dev.setfilter(0, CAN.FILTER_ADDRESS, [0x102, 0])  # set a filter to receive messages with id = 0x102
  var code = 'can.setfilter(0, CAN.FILTER_ADDRESS, [0x102, 0]) \n';

  return code;
};

Blockly.Python['esp32_can_send'] = function(block) {
  var id = Blockly.Python.valueToCode(block, 'id', Blockly.Python.ORDER_ATOMIC);
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = 'can.send([1,2,3], 0x102) \n';

  return code;
};

Blockly.Python['esp32_can_recv'] = function(block) {

  var code = 'can.recv()';

  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['python_try_catch'] = function(block) {

  var funct_code = Blockly.Python.statementToCode(block, 'try');
  var c = Blockly.Python.statementToCode(block, 'catch');

  var code = "try:\n"+funct_code+"except:\n"+c+"\n";
  return code;
};



Blockly.Python['neopixel_color_numbers'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  // Style block with compiled values, see block_definitions.js
  this.styleBlock([value_red, value_green, value_blue])

  var code = `(${value_red},${value_green},${value_blue})`;

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['neopixel_color_colors'] = function(block) {
  var color = block.getFieldValue('color');
  var h = Tool.HEX2RGB(color);
  var code = `(${h.r},${h.g},${h.b})`;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['HSL_to_RGB'] = function(block) {
  var value_hue = Blockly.Python.valueToCode(block, 'hue', Blockly.Python.ORDER_ATOMIC);
  var value_saturation = Blockly.Python.valueToCode(block, 'saturation', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'lightness', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['HSL_to_RGB'] = 'def HSL_to_RGB(h, s, l):\n	h, s, l = h/360, s/100, l/100\n	def hue2rgb (p, q, t):\n		if(t < 0.): t += 1\n		if(t > 1.): t -= 1\n		if(t < 1/6): return p + (q - p) * 6 * t\n		if(t < 1/2): return q\n		if(t < 2/3): return p + (q - p) * (2/3 - t) * 6\n		return p\n	q = l * (1 + s) if l < 0.5 else l + s - l * s\n	p = 2 * l - q\n	r, g, b = hue2rgb(p, q, h + 1/3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1/3)\n	return (int(r * 255), int(g * 255), int(b * 255))\n';

  this.styleBlock([value_hue, value_saturation, value_brightness])

  var code = `HSL_to_RGB(${value_hue},${value_saturation},${value_brightness})`;

  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['neopixel_init'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel'] = 'from neopixel import Neopixel';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
  var value_number = Blockly.Python.valueToCode(block, 'number', Blockly.Python.ORDER_NONE);

  Blockly.Python.definitions_['neopixel_init' ] = `np=Neopixel(${value_number},0,${value_pin},"GRB")\n`; 

  // var code = `np=neopixel.NeoPixel(Pin(${value_pin}),${value_number})\n`;
  var code = '';

  return code;
};

Blockly.Python['neopixel_control'] = function(block) {
  var value_address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_NONE);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_NONE);

  var code = `np.set_pixel(${value_address},${value_color})\n`;

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel'] = 'from neopixel import Neopixel';
  Blockly.Python.definitions_['neopixel_init' ] = `np=Neopixel(12,0,0,"GRB")\n`; 
  // Blockly.Python.definitions_['neopixel_init' ] = `np=Neopixel(50,0,29,"GRB")\n`; 

  return code;
};

Blockly.Python['neopixel_control_line'] = function(block) {
  var start_address = Blockly.Python.valueToCode(block, 'start_address', Blockly.Python.ORDER_NONE);
  var end_address = Blockly.Python.valueToCode(block, 'end_address', Blockly.Python.ORDER_NONE);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_NONE);

  var code = `np.set_pixel_line(${start_address},${end_address},${value_color})\n`;

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel'] = 'from neopixel import Neopixel';
  Blockly.Python.definitions_['neopixel_init' ] = `np=Neopixel(12,0,0,"GRB")\n`; 
  // Blockly.Python.definitions_['neopixel_init' ] = `np=Neopixel(50,0,29,"GRB")\n`; 

  return code;
};

Blockly.Python['neopixel_control_all'] = function(block) {
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_NONE);

  var code = `np.fill(${value_color})\n`;

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel'] = 'from neopixel import Neopixel';
  Blockly.Python.definitions_['neopixel_init' ] = `np=Neopixel(12,0,0,"GRB")\n`; 
  // Blockly.Python.definitions_['neopixel_init' ] = `np=Neopixel(50,0,29,"GRB")\n`; 

  return code;
};

Blockly.Python['neopixel_rotate_left'] = function(block) {
  var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_NONE);

  var code = `np.rotate_left(${value_step})\n`;

  return code;
};

Blockly.Python['neopixel_rotate_right'] = function(block) {
  var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_NONE);

  var code = `np.rotate_right(${value_step})\n`;

  return code;
};

Blockly.Python['neopixel_write'] = function(block) {
  var code = 'np.show()\n';
  return code;
};

Blockly.Python['bipes_plot'] = function(block) {
   var x = Blockly.Python.valueToCode(block, 'values', Blockly.Python.ORDER_NONE) || '\'\'';
   var id = Blockly.Python.valueToCode(block, 'id', Blockly.Python.ORDER_NONE) || '\'\'';

/*	
  let q = new Queue('BipesDataSources');
  q.enqueue(id);
*/

  var code = `print('BIPES-DATA:',${id},',',${x})\n`;

  return code;
};

//REPL over Web Bluetooth
Blockly.Python['bluetooth_repl_start'] = function(block) {
  Blockly.Python.definitions_['import_bluetoot_repl'] = 'import ble_uart_repl';
  var t = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
  var code = 'ble_uart_repl.start(' + t + ')\n';
  return code;
};

Blockly.Python['bluetooth_repl_setup'] = function(block) {
  Blockly.Python.definitions_['import_bluetoot_repl'] = 'import ble_uart_repl';
  var code = '\n';
  return code;
};

//ST7789 display
Blockly.Python['st7789_init'] = function(block) {
  var bl = Blockly.Python.valueToCode(block, 'bl', Blockly.Python.ORDER_ATOMIC);
  var sck = Blockly.Python.valueToCode(block, 'sck', Blockly.Python.ORDER_ATOMIC);
  var mosi = Blockly.Python.valueToCode(block, 'mosi', Blockly.Python.ORDER_ATOMIC);
  var reset = Blockly.Python.valueToCode(block, 'reset', Blockly.Python.ORDER_ATOMIC);
  var cs = Blockly.Python.valueToCode(block, 'cs', Blockly.Python.ORDER_ATOMIC);
  var dc = Blockly.Python.valueToCode(block, 'dc', Blockly.Python.ORDER_ATOMIC);
  var spi = Blockly.Python.valueToCode(block, 'spi', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_st7789py'] = 'import st7789py';

  Blockly.Python.definitions_['import_st7789bl1'] = 'st7789_bl = machine.Pin(' + bl + ', machine.Pin.OUT)';
  Blockly.Python.definitions_['import_st7789bl2'] = 'st7789_blp=machine.PWM(st7789_bl)';

  var code = 'st7789_blp.duty(100)\n';

      code += 'spi = machine.SPI(' + spi + ', baudrate=20000000, polarity=1, phase=1, sck=machine.Pin(' + sck + '), mosi=machine.Pin(' + mosi + '))\n';
      code += 'display7789 = st7789py.ST7789(spi, 135, 240, reset=machine.Pin(' + reset + ', machine.Pin.OUT), cs=machine.Pin(' + cs + ', machine.Pin.OUT), dc=machine.Pin(' + dc + ', machine.Pin.OUT))\n';
      code += 'display7789.init()\n';
  return code;
};

Blockly.Python['st7789_bl_power'] = function(block) {
  var v = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);

  var code = 'st7789_blp.duty(' + v + ')\n';
  return code;
};

Blockly.Python['st7789_color_numbers'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  // Style block with compiled values, see block_definitions.js
  this.styleBlock([value_red, value_green, value_blue])

  var code = `(${value_red},${value_green},${value_blue})`;

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['st7789_color_colors'] = function(block) {
  var color = block.getFieldValue('color');
  var h = Tool.HEX2RGB(color);
  var code = `(${h.r},${h.g},${h.b})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['st7789_fill'] = function(block) {
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = 'display7789.fill(st7789py.color565(' + r + ', ' + g + ', ' + b + '))\n';
  return code;
};

Blockly.Python['st7789_pixel'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var c = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = 'display7789.pixel(' + x + ', ' + y + ', st7789py.color565' + c + ')\n';
  return code;
};

Blockly.Python['st7789_line'] = function(block) {
  var x0 = Blockly.Python.valueToCode(block, 'x0', Blockly.Python.ORDER_ATOMIC);
  var x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var y0 = Blockly.Python.valueToCode(block, 'y0', Blockly.Python.ORDER_ATOMIC);
  var y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var c = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = 'display7789.line(' + x0 + ',' + y0 + ',' + x1 + ',' + y1 + ', st7789py.color565' + c + ')\n';
  return code;
};


Blockly.Python['control_pid.__init__'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var number_kp = block.getFieldValue('Kp');
  var number_ki = block.getFieldValue('Ki');
  var number_kd = block.getFieldValue('Kd');
  var number_sample_time = block.getFieldValue('SAMPLETIME');
  number_sample_time = parseInt(number_sample_time) == 0 ? 'None': number_sample_time;
  var dropdown_scale = block.getFieldValue('SCALE');
  var value_setpoint = Blockly.Python.valueToCode(block, 'SETPOINT', Blockly.Python.ORDER_NONE);

  this.check([number_kp,number_ki,number_kd], number_sample_time);

  Blockly.Python.definitions_['import_pid'] = 'from control import PID';

  let code = `pid${number_id} = PID(${number_kp}, ${number_ki}, ${number_kd}, setpoint=${value_setpoint}, scale='${dropdown_scale}'`;
  code = number_sample_time != 0 ? `${code}, sample_time=${number_sample_time})\n` : `${code})\n`;
  return code;
};

Blockly.Python['control_pid.compute'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_NONE);

  return [`pid${number_id}(${value_input})`, Blockly.Python.ORDER_NONE];
};

Blockly.Python['control_pid.compute_not_realtime'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_NONE);
  var value_dt = Blockly.Python.valueToCode(block, 'DT', Blockly.Python.ORDER_NONE);

  return [`pid${number_id}(${value_input},${value_dt})`, Blockly.Python.ORDER_NONE];
};

Blockly.Python['control_pid.tunings'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_kp = Blockly.Python.valueToCode(block, 'KP', Blockly.Python.ORDER_NONE);
  var value_ki = Blockly.Python.valueToCode(block, 'KI', Blockly.Python.ORDER_NONE);
  var value_kd = Blockly.Python.valueToCode(block, 'KD', Blockly.Python.ORDER_NONE);
  var code = `pid${number_id}.tunings = (${value_kp}, ${value_ki}, ${value_kd})\n`;
  return code;
};

Blockly.Python['control_pid.setpoint'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_setpoint = Blockly.Python.valueToCode(block, 'SETPOINT', Blockly.Python.ORDER_NONE);

  var code = `pid${number_id}.setpoint = ${value_setpoint}\n`;
  return code;
};

Blockly.Python['control_pid.output_limits'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var number_lower = block.getFieldValue('LOWER');
  var number_upper = block.getFieldValue('UPPER');

  var code = `pid${number_id}.output_limits = (${number_lower}, ${number_upper})\n`;
  return code;
};

Blockly.Python['control_pid.auto_mode'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var checkbox_enable = block.getFieldValue('ENABLE') == 'TRUE' ? 'True' : 'False';
  var code =  `pid${number_id}.auto_mode = ${checkbox_enable}\n`;
  return code;
};
Blockly.Python['control_pid.vars'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var dropdown_vars = block.getFieldValue('VARS');
  var code =  `pid${number_id}.${dropdown_vars}`;
  return [code, Blockly.Python.ORDER_NONE];
};

UPythonClass.WaterBoiler = `class WaterBoiler:\n    """\n    Simple simulation of a water boiler which can heat up water\n    and where the heat dissipates slowly over time\n    """\n\n    def __init__(self, dissipation=0.2):\n        self.water_temp = 20\n        self.ambient = 20\n        self.dissipation = dissipation\n        self._last_time = utime.ticks_ms()\n\n    def update(self, boiler_power):\n    	now = utime.ticks_ms()\n    	dt = utime.ticks_diff(now,self._last_time) if (utime.ticks_diff(now,self._last_time)) else 1e-16\n        if boiler_power > 0:\n        	# Boiler can only produce heat, not cold\n        	self.water_temp += 1 * boiler_power * dt / 1000\n\n        # Some heat dissipation\n        self.water_temp -= (self.water_temp - self.ambient) * self.dissipation * dt\n\n        self._last_time = now\n        return self.water_temp`;
Blockly.Python['simulate_water_boiler'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var number_dissipation = block.getFieldValue('DISSIPATION');
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_NONE);

	Blockly.Python.definitions_['import_utime'] = 'import utime';
  Blockly.Python.definitions_['simulate_water_boiler_class'] = UPythonClass.WaterBoiler;
  Blockly.Python.definitions_[`simulate_water_boiler_obj${number_id}`] = `water_boiler${number_id} = WaterBoiler(${number_dissipation})`;

  var code = `water_boiler${number_id}.update(${value_power})`;

  return [code, Blockly.Python.ORDER_NONE];
};

UPythonClass.DCMotor = `class DCMotor:\n\n    def __init__ (\n    	self,\n    	Ra=0.52,\n    	La=0.000036,\n    	B=0.00001,\n    	J=0.000012,\n    	Kbemf=0.0137,\n    	STATIC_FRICTION=0.01,\n    	FRICTION_S=0.01\n    ):\n        self.bemf = 0.0\n        # omega = rpm ( w )\n        self.omega = 0.0\n\n        # theta = electrical angle normalized to 2*pi\n        self.theta = 0.0\n\n        self.ia, self.va = 0.0, 0.0\n\n        self.Pelec, self.Te, self.Tl = 0.0, 0.0, 0.0\n\n        # La here is La subtracted by mutual inductance M.\n        self.Ra, self.La, self.B, self.J = Ra, La, B, J\n        self.Kbemf = Kbemf\n        self.STATIC_FRICTION, self.FRICTION_S = STATIC_FRICTION, FRICTION_S\n\n        self._last_time = 0.0\n\n\n    # The simulator\n    def sim( self, load, va, dt):\n    	now = utime.ticks_us()\n\n        # Set the load\n        sign = math.copysign( 1, self.omega )\n        self.Tl = sign * load\n        self.va = va\n\n        # Calculate bemf\n        self.bemf = self.Kbemf * self.omega\n\n        # Calculate change in current per di/dt\n        dot_ia = (1.0 / self.La) * ( self.va - (self.Ra * self.ia) - self.bemf )\n\n        # Apply changes to current in phases\n        self.ia += dot_ia * dt\n\n        # Electrical torque. Since omega can be null, cannot derive from P/w\n        self.Te = self.Kbemf * self.ia\n\n        # Electrical power\n        self.Pelec = self.bemf * self.ia\n\n\n        # Mechanical torque.\n        # mtorque = ((etorque * (p->m->NbPoles / 2)) - (p->m->damping * sv->omega) - p->pv->torque);\n        self.Tm = ((self.Te) - (sign * self.B * abs(self.omega)) - self.Tl)\n\n        # Friction calculations\n        if abs(self.omega) < 1.0:\n            if abs(self.Te) < self.STATIC_FRICTION:\n                self.Tm = 0.0\n            else:\n                self.Tm -= self.STATIC_FRICTION\n        else:\n           self.Tm = self.Tm - sign * ( self.STATIC_FRICTION * math.exp( -5 * abs( self.omega )) + self.FRICTION_S )\n\n        # J is the moment of inertia\n        dotOmega = (self.Tm / self.J)\n        self.omega = self.omega + dotOmega * dt\n\n\n        self.theta += self.omega * dt\n        self.theta = self.theta % ( 2.0 * math.pi )\n\n        self._last_time += dt\n        return self.omega`;
Blockly.Python['simulate_dcmotor.sim'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var Ra = block.getFieldValue('RA');
  var La = block.getFieldValue('LA');
  var B = block.getFieldValue('B');
  var J = block.getFieldValue('J');
  var Kbemf = block.getFieldValue('KBEMF');
  var Static_Friction = block.getFieldValue('STATIC_FRICTION');
  var value_load = Blockly.Python.valueToCode(block, 'LOAD', Blockly.Python.ORDER_NONE);
  var value_dt = Blockly.Python.valueToCode(block, 'DT', Blockly.Python.ORDER_NONE);
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_NONE);

	Blockly.Python.definitions_['import_utime'] = 'import utime';
	Blockly.Python.definitions_['import_math'] = 'import math';
  Blockly.Python.definitions_['simulate_dcmotor_class'] = UPythonClass.DCMotor;
  Blockly.Python.definitions_[`simulate_dcmotor_obj${number_id}`] = `dcmotor${number_id} = DCMotor(${Ra},${La},${B},${J},${Kbemf},${Static_Friction},0)`;

  var code = `dcmotor${number_id}.sim(${value_load},${value_power},${value_dt})`;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['simulate_dcmotor.vars'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var dropdown_vars = block.getFieldValue('VARS');
  var code =  `dcmotor${number_id}.${dropdown_vars}`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["esp32_cam_init"] = function(block) {
	Blockly.Python.definitions_['import_camera'] = 'import camera';
	var code = "camera.init()\n"; 
	return code;
};

Blockly.Python["esp32_cam_capture"] = function(block) {
	Blockly.Python.definitions_['import_camera'] = 'import camera';
	var code = "camera.capture()"; 
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["esp32_cam_red_led"] = function(block) {
	var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';

	var code = 'gpio_set(33' + ', ' + value_value + ')\n';
	return code;
};

Blockly.Python["esp32_cam_white_led"] = function(block) {
	var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';

	var code = 'gpio_set(4' + ', ' + value_value + ')\n';
	return code;
};

Blockly.Python["rtttl_play"] = function(block) {
	// var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  // var pin = '(8)';
  var pin = '(3)';

	var song = Blockly.Python.valueToCode(block, 'song', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_rtttl'] = 'import rtttl, songs';

	//var code = 'play = rtttl.play(Pin(' + pin + ', Pin.OUT), songs.find(' + song + ')) \n';
  var code = 'play = rtttl.play(Pin' + pin + ', songs.find(' + song + ')) \n';
	return code;
};

Blockly.Python['tone'] = function(block) {
	// var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	var value_pin = '3';
	var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_ATOMIC);
	var d = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  	Blockly.Python.definitions_['import_time'] = 'import time';
  	
	var x = value_pin.replace('(','').replace(')','');

	//var code = 'pwm' + x + ' = PWM(Pin(' + x + '), freq=' + value_frequency + ', ' + ' duty=512)\n';
	var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty_u16(32768)\n`;

	var d1=parseFloat(d);
	if (d1==0)
		code += '';
	else
		code += 'time.sleep(' + d + ')\npwm' + x + '.deinit()\n';

	return code;
  };


Blockly.Python['note'] = function(block) {
	// var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
  var value_pin = '3';

	var value_frequency = Blockly.Python.valueToCode(block, 'note', Blockly.Python.ORDER_NONE);
	var d = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_NONE);

	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['tempo_set'] = 'tempo = 120';
  	
	var x = value_pin.replace('(','').replace(')','');

	//var code = 'pwm' + x + ' = PWM(Pin(' + x + '), freq=' + value_frequency + ', ' + ' duty=512)\n';
  var code = '';
  if (value_frequency > 0) {
    code += `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty_u16(32768)\n`;
  }
	var d1=parseFloat(d);
	if (d1==0)
		code += '';
	else
		code += 'time.sleep( ' + d + '/ tempo )\npwm' + x + '.deinit()\n';

	return code;
  };


Blockly.Python['tone_type'] = function(block) {
  var dropdown_tone = block.getFieldValue('tone');
  var code = dropdown_tone;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['duration_type'] = function(block) {
  var dropdown_duration = block.getFieldValue('duration');
  var code = dropdown_duration;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['tempo'] = function(block) {
	// var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	var tempo = Blockly.Python.valueToCode(block, 'tempo', Blockly.Python.ORDER_ATOMIC);
	var code = `tempo = ${tempo}\n`;
	return code;
  };

//Other st7789 functions
/*
def set_window(self, x0, y0, x1, y1):
def vline(self, x, y, length, color):
def hline(self, x, y, length, color):
def pixel(self, x, y, color):
def blit_buffer(self, buffer, x, y, width, height):
def rect(self, x, y, w, h, color):
def fill_rect(self, x, y, width, height, color):
def fill(self, color):
def line(self, x0, y0, x1, y1, color):
*/

//Fri Aug  6 23:26:20 -03 2021
//Snek (https://sneklang.org/doc/snek.html)

Blockly.Python["snek_uptime"] = function(block) {
  var code = "time.monotonic()";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['snek_delay'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep(' + value_time + ')\n';
  return code;
};

Blockly.Python['snek_adc'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  var code = 'read(' + x + ')';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['snek_setpower'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
  	
	var x = value_pin.replace('(','').replace(')','');

	if (value_duty>1)
		value_duty=1;
	if (value_duty<0)
		value_duty=0;

	var code = 'talkto(' + x + ')\n';
	    code += 'setpower(' + value_duty + ')\n';

	return code;
};

Blockly.Python['snek_gpio_set'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var x = value_pin.replace('(','').replace(')','');

  var code = 'talkto(' + x + ')\n';
  if (value == 'True')
      code += 'on()\n';
  if (value == 'False')
      code += 'off()\n';

  return code;

};

Blockly.Python['snek_gpio_get'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  var code = 'read(' + x + ')';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['google_spreadsheet'] = function(block) {
  Blockly.Python.definitions_['import_prequests'] = 'import prequests';
  Blockly.Python.definitions_['import_ujson'] = 'import ujson';

  var number_sheet_num = block.getFieldValue('sheet_num');
  var value_deploy_code = Blockly.Python.valueToCode(block, 'deploy_code', Blockly.Python.ORDER_ATOMIC);
  var cells_blocks = block.getInputTargetBlock('cells_values');

  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['post_data'] = 'def post_data(row_data, deployment_code):\n  request_data = ujson.dumps({"parameters": row_data})\n  r = prequests.post("https://script.google.com/macros/s/" + deployment_code + "/exec", headers = {"content-type": "application/json"}, data = request_data)\n  r.close()';
  Blockly.Python.definitions_['deployment_code' + number_sheet_num] = 'deployment_code' + number_sheet_num + '= ' + value_deploy_code;
  Blockly.Python.definitions_['row_data_' + number_sheet_num] = 'row_data' + number_sheet_num +' = {}';

  if(cells_blocks)
  var num_cell = 0;
  var row_data_def = '';
    do{
      var cell_value = Blockly.Python.blockToCode(cells_blocks, 'Cell');
      row_data_def += ' row_data' + number_sheet_num +'["var' + num_cell+ '"] = ' + cell_value+'\n';
      num_cell ++;
    }while (cells_blocks = cells_blocks.getNextBlock());

    Blockly.Python.definitions_['row_data_cell'+ number_sheet_num] = 'def update_row_data'+ number_sheet_num+'():\n' + row_data_def;
  
  var code = 'update_row_data'+ number_sheet_num+'()\npost_data(row_data' + number_sheet_num+',deployment_code' + number_sheet_num+')\n';
  return code;
};

Blockly.Python['cell_value'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_value;
  return code;
};
// Gerando os códigos dos Blocos do Pluviômetro
// Iniciar Pluviômetro
Blockly.Python['pluvio_init'] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	
	var value_handler = Blockly.Python.valueToCode(block, 'Função', Blockly.Python.ORDER_ATOMIC);
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  
	var code = 'pluviometro=machine.Pin('+value_pin+',machine.Pin.IN,machine.Pin.PULL_UP) \npluviometro.irq(trigger=machine.Pin.IRQ_FALLING,handler='+ value_handler.replace('\'','').replace('\'','') +')\n';
  
	return code;
};
// Parar Pluviômetro
Blockly.Python['pluvio_stop'] = function(block){
	Blockly.Python.definitions_['import_machine'] = 'import machine';

	var value_handler = Blockly.Python.valueToCode(block, 'Função', Blockly.Python.ORDER_ATOMIC);

	var code = 'pluviometro.irq(trigger=0,handler='+value_handler.replace('\'','').replace('\'','')+')\n';
	return code;
};
//Gerando os códigos dos Blocos do Anemômetro
// Iniciar Anemômetro
Blockly.Python['anemo_init'] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	
	var value_handler = Blockly.Python.valueToCode(block, 'Função', Blockly.Python.ORDER_ATOMIC);
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  
	var code = 'anemometro=machine.Pin('+value_pin+',machine.Pin.IN,machine.Pin.PULL_UP) \nanemometro.irq(trigger=machine.Pin.IRQ_FALLING,handler='+ value_handler.replace('\'','').replace('\'','') +')\n';
  
	return code;
};
// Parar Anemômetro
Blockly.Python['anemo_stop'] = function(block){
	Blockly.Python.definitions_['import_machine'] = 'import machine';

	var value_handler = Blockly.Python.valueToCode(block, 'Função', Blockly.Python.ORDER_ATOMIC);

	var code = 'anemometro.irq(trigger=0,handler='+value_handler.replace('\'','').replace('\'','')+')\n';
	return code;
};
// Gerando código dos blocos de interrupção
// Iniciar Interrupção
Blockly.Python['inter_init'] = function(block){
	Blockly.Python.definitions_['import_machine'] = 'import machine';

	var value_nome = Blockly.Python.valueToCode(block, 'Nome', Blockly.Python.ORDER_ATOMIC);
	var value_handler = Blockly.Python.valueToCode(block, 'Função', Blockly.Python.ORDER_ATOMIC);
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

	var code = ''+value_nome.replace('\'','').replace('\'','')+'=machine.Pin('+value_pin+', machine.Pin.IN, machine.Pin.PULL_UP) \n'+value_nome.replace('\'','').replace('\'','')+'.irq(trigger=machine.Pin.IRQ_FALLING, handler='+ value_handler.replace('\'','').replace('\'','')+')\n';
	return code;
};

