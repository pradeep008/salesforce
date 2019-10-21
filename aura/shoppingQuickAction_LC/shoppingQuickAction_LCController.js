({
    doInit : function(component, event, helper) {
        setTimeout(function () {$A.get('e.force:closeQuickAction').fire();}, 50);
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": '/apex/LightningOutDemo?id=' + component.get('v.recordId')   
        });
        urlEvent.fire();
    }
})