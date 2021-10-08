package ir.nasirimehr.firechat;

import com.facebook.react.bridge.JSIModulePackage;
import com.facebook.react.bridge.JSIModuleSpec;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.Collections;
import java.util.List;

import com.swmansion.reanimated.ReanimatedJSIModulePackage;
import com.ammarahmed.mmkv.RNMMKVModule;

public class RNMMKVJSIModulePackage implements ReanimatedJSIModulePackage  { // Replace implements JSIModulePackage with extends ReanimatedJSIModulePackage
    @Override
    public List<JSIModuleSpec> getJSIModules(ReactApplicationContext reactApplicationContext, JavaScriptContextHolder jsContext) {
        super.getJSIModules(reactApplicationContext, jsContext); // <-- ADD THIS
        reactApplicationContext.getNativeModule(RNMMKVModule.class).installLib(jsContext, reactApplicationContext.getFilesDir().getAbsolutePath() + "/mmkv");

        return Collections.emptyList();
    }
}
